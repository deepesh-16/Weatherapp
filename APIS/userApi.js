//create router to handle user api request
const exp=require('express');
const userApp=exp.Router()
const expressAsyncHandler=require("express-async-handler")
//import bcrypt for password hashing
const bcryptjs=require("bcryptjs");
//import jsonwebtoken to create token
const jwt=require("jsonwebtoken")
require('dotenv').config()
const verifyToken=require('./middlewares/verifyToken');







//to extract body of request object
userApp.use(exp.json())
userApp.use(exp.urlencoded());



//create get users path
userApp.get('/getusers',verifyToken,
 expressAsyncHandler(async(request,response)=>{
    let usercollectionObject=request.app.get("usercollectionObject")

    let users=await usercollectionObject.find().toArray()

    response.send({message:"users list : ",payload:users})
}));

//create route to user login
userApp.post('/login',expressAsyncHandler(async(request,response)=>{

    let usercollectionObject=request.app.get("usercollectionObject")

    let userCredObj=request.body

    //search for user by username
    let userOfDB=await usercollectionObject.findOne({username:userCredObj.username})

    if(userOfDB==null){
        response.send({message:"Invalid username"});
    }
    else{
        //compare password
        let status=await bcryptjs.compare(userCredObj.password,userOfDB.password);
        
        if(status==false){
            response.send({message:"Invalid password"})
        }
        else{
            //create token
            let token=jwt.sign(
                {username:userOfDB.username},
                process.env.SECRET_KEY,
                {expiresIn:10}
            );
            //send token
            response.send({message:"success",payload:token,userObj:userOfDB})

        }
    } 
}));
//create a route to 'create-user'
userApp.post(
    '/create-user',
    expressAsyncHandler(async(request,response)=>{
    let usercollectionObject=request.app.get("usercollectionObject")
    //get userObj as string and convert it into object
    let newUserObj=request.body;
    //search for user by username
    let userOfDB=await usercollectionObject.findOne({username:newUserObj.username})

    //if user existed
    if(userOfDB!==null){
        response.send({message:"username has already taken..."})
    }
    else{
        //hash password
        let hashedPassword=await bcryptjs.hash(newUserObj.password,6);
        //replace plane password with hashed password
        newUserObj.password=hashedPassword;
        //insert newUser
        await usercollectionObject.insertOne(newUserObj)
        //send response  to user
        response.send({message:"user created successfully"})

    }

}))

//create a route to modify user data
userApp.put('/update',expressAsyncHandler(async(request,response)=>{

    
}))

//create a route to delete user by id
userApp.delete('/remove-user/:id',expressAsyncHandler(async(request,response)=>{

  
}))

//create private for testing
userApp.get('/test',verifyToken,(request, response)=>{
    response.send({message:"This reply is from private round"});
})

//export userApp
module.exports=userApp;


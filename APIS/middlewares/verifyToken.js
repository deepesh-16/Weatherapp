const jwt=require("jsonwebtoken")
require("dotenv").config()



//write a middleware to verify token
const verifyToken=(request , response , next )=>{
    //get bearer token
    let bearerToken=request.headers.authorization;
    //check token is existed
    if(bearerToken==undefined){
        response.send({message:"unauthorized request"})
    }
    //extract token
    let token=bearerToken.split(" ")[1]
    //if token is null
    if(token==null){
        response.send({message:"unauthorized request"})
    }
    try{
    //verify token
    jwt.verify(token,process.env.SECRET_KEY)
    //forward request to private route
    next()
    }
    catch(err){
        response.send({message:"session expired..Relogin to continue"})

    }
}

//export
module.exports=verifyToken;
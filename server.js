//create express app
const exp=require('express');
const app=exp();
const mclient=require("mongodb").MongoClient;

require('dotenv').config()

//import path module
const path=require('path');

//connect build of react app with nodejs
app.use(exp.static(path.join(__dirname,'./build')))




//Db connection url
const DBurl=process.env.DATABASE_CONNECTION_URL

//connect with mongoDB server
mclient.connect(DBurl)
.then((client)=>{

    //get DB object
    let dbObj=client.db("vnr2022db")

    //create collection object
    let usercollectionObject=dbObj.collection("usercollection")
    let productcollectionObject=dbObj.collection("productcollection")


    //sharing collection objects to APIs
    app.set("usercollectionObject",usercollectionObject);
    app.set("productcollectionObject",productcollectionObject);


    console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))


//import userApp and productApp
const userApp=require('./APIS/userApi');
//execute  specific middleware based on path
app.use('/user-api',userApp)

//dealing with page refresh
app.use('*',(request , response )=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
});

//handling invalid paths
app.use((request , response ,next)=>{
    response.send({message:`path ${request.url} is invalid`})
})

//error handling middleware
app.use(( error , request , response , next )=>{
    response.send({message:" Error occured ",reason:`${error.message} `})
})

//assign port number
const port=process.env.PORT
app.listen(port, ()=>console.log(`web server is listening on port ${port}`));
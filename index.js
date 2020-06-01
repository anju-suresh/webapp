var express=require('express')
const server= express()
server.listen(8000,function(){
    console.log("sever started listening...")
});
server.get("/",function(req,res){
    res.send("welcome")
})
server.get("/home",function(req,res){
    res.sendFile(__dirname+"/webapp/index.html")
})
server.get("/login",function(req,res){
    res.sendFile(__dirname+"/webapp/login.html")
})
var express=require('express');
var router=require('./routers/route');
var db=require('./connections/database');
var aurouter=require('./routers/authenticateroute');
var server=express();
db.connection()
server.set('view engine','ejs');
server.use('/home',router);
server.use('/',aurouter);
module.exports=server;

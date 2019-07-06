var express=require('express')
var controllers=require('../controllers/commentcontroller')
var route=express.Router();
route.get('/',function(req,res)
{

        res.render('home');

})
route.get('/comments',controllers.getcomments);
module.exports=route;
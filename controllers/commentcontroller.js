var comments=require('../models/comment')
exports.getcomments=function(req,res)
{
comments.find().then(function(tasks)
{
    res.render('comments',{allcomments:tasks});
})
}
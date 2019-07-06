var mongoose= require('mongoose');
exports.connection=function(){mongoose.connect('mongodb://localhost:27017/comments',
{useNewUrlParser:true},
function(err)
{
    if(!err)
    {
        console.log('mongoose connected')
    }
    else{
        console.log
        (err);
    }
})}
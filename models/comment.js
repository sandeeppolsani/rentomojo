var mongoose=require('mongoose')
var commentschema=new mongoose.Schema(
    {
        description:{type:String},
        postid:{type:Object}
    },{
        timestamps:true
    }
)

module.exports=mongoose.model('comment',commentschema)
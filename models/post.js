var mongoose=require('mongoose')
var postschema=new mongoose.Schema(
    {
        title:{type:string ,required:true},
        description:{type:string},
        upvotes:{typr:Number , default:0},
        downvotes:{type:Number,default:0},
        username:{type:string ,required:true}
    },{
        timestamps:true
    }
)
module.exports=mongoose.model('Post',postschema)
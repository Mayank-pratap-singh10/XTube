import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
const videoSchema =new Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    ispublished:{
        type:String,
        default:true
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }


},{timestams:true});
videoSchema.plugin(mongoosePaginate);
export const Video=mongoose.model("Video",videoSchema);
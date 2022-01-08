const mongoose = require('mongoose');
const {Schema} = mongoose
const addCardShcema = new Schema({
    key : Number,
    name: String,
    duration:Number,
    price:Number,
    desc: {
        type:String
    },
    images:{
        type:String,
        default: ""
    },
    isDelete:{
        type:Boolean,
        default:false
    }
    
})
module.exports= mongoose.model('addCard', addCardShcema);

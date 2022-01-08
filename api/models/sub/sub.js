const mongoose = require('mongoose');
const {Schema} = mongoose;
const subSchema = new Schema({
    key: String,
    email: {
        type:String,
        required:true,
        trim:true
    },
    name: String,
    duration:Number,
    nID: String,
    DLD: String,
    bkash: Number
})
module.exports= mongoose.model('subscribe', subSchema);
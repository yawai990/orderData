const mongoose =require('mongoose')

const massSchema = mongoose.Schema({
    shopName:{
        type:String,
        required:true
    },
    phoneNumber:Number,
    lglf14:Number,
    spk14:Number,
    gtw24:Number,
    sot:String,
    date:String,
    address:String,
},
{
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const massData = mongoose.model("massData",massSchema);

module.exports = massData;
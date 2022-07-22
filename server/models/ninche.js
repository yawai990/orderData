const mongoose = require('mongoose');

const nincheSchema = mongoose.Schema({
    shopName:{
        type:String,
        required:true
    },
    phoneNumber:Number,
    blue:Number,
    dark:Number,
    grape:Number,
    pome:Number,
    moji:Number,
    pina:Number,
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

const nincheData = mongoose.model('nincheData',nincheSchema);

module.exports = nincheData
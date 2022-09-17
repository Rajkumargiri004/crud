const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        min: 3,
        max:20,
        required:[true,"Please provide your name!"],
        trim:true
    },
    introduction:{
        type:String,
        required:[true,"Please provide your introduction!"],

    },
    eduDetail:{
        type:String,
        required:[true,"Please provide your address!"]
    }

});

module.exports = mongoose.model('userdetails',userSchema);
const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    gender:String,
    status:String

});

const Userdb = mongoose.model('userdb', Schema);

module.exports = Userdb
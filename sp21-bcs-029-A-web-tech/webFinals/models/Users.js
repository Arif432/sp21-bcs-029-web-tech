const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    email: {
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    role:{
        type:String,
    },
  
});

const UserModal = mongoose.model('users', UserSchema);
module.exports = UserModal;
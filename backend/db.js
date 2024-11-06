const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect('mongodb+srv://pritishjr07:aRcEr8q3rwZH14Zl@cluster0.1hm0m.mongodb.net/Paytm');
const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password : {
        type: String,
        required: true,
        minLength: 6
    },
    firstName :{
        type: String,
        required: true,
        maxLength: 50,
        trim : true
    },
    lastName:{
        type: String,
        required: true,
        maxLength: 50,
        trim : true
    }
});

const bankSchema = new Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance : {
        type : Number,
        required : true
    }
});

const User = mongoose.model('User', userSchema);

const Account = mongoose.model('Account', bankSchema);

module.exports = {
    User,
    Account,
};



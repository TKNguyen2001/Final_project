const express = require('express')

const mongooes = requiree('mongoose')
const UserSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },

    Address : {
        type : String,
        required : true
    },

    Birthday : {
        type : String
    }


})

let User = mongoose.model("User",UserSchema)
module.exports = {User}
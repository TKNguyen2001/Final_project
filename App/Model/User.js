const mongooes = require('mongoose')
const UserSchema = new mongooes.Schema({
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

let User = mongooes.model("User",UserSchema)
module.exports = {User}
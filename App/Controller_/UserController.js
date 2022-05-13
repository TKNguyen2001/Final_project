const{User} = require('../Model/User')

const UserController = {
    add_User : async(req,res) =>{
        try{
            const NewUser = new User(req.body)
            const saveUser = await NewUser.save()
            console.log("Create user successful")
            res.json(saveUser)
        }
        catch(error){
            console.log("Create user fail")
        }
    },

    //Get user

    Get_All_user : async(req,res) =>{
        try{
            const getUser  = await User.find()
            res.json(getUser)
            console.log("Get User Successful")
        }
        catch(error){
            console.log("Get user fail")
        }
    }
}

module.exports = UserController

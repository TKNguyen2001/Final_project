const express = require('express')
const UserController = require('../Controller_/UserController')

var router = express.Router()


//Create

router.post('/Add_user',UserController.add_User)


//Read

router.get("/Get_User",UserController.Get_All_user)

//Update


//Delete

module.exports = router
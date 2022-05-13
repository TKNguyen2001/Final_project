const express = require('express')
const mongooes = require("mongoose")

const app = express()

app.use(express.json())


mongooes.connect('mongodb+srv://thangnguyen30092001:1234567890@cluster0.qvcxj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{{
    console.log('database connected')
}})
.catch(()=>{{
    console.log('database connect fail')
}})

//Router
const UserRouter = require('./App/Router/UserRouter')

app.use('/api/v1/User',UserRouter)



app.listen(3000,()=>{{
    console.log('Listeb on port 3000')
}})

module.exports = app





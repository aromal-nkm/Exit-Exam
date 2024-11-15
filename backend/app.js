const express = require('express')
const app=express()
const cors=require('cors')
const TodoRoutes = require('./routes/todoRoutes')

require('dotenv').config()
 const PORT = process.env.PORT
 require('./db/connection')
 app.use(cors())
 app.use('/todo',TodoRoutes)
app.listen(4000,()=>{

    console.log(`Server is running on PORT ${PORT}` )
})

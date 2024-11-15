const  mongoose = require('mongoose')
const todoSchema=mongoose.Schema({
    Description:String,
    Status:{type: String,enum:['completed','ongoing']}
})
const Data= mongoose.model('todo',todoSchema);
module.exports=Data
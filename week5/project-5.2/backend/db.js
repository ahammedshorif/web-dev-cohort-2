
/*
todo {
 title: string,
 description: string,
 completed: bool
}
*/

const mongoose = require("mongoose")
//.env
mongoose.connect("mongodb://localhost:27017/Todos")


const todoSchema = mongoose.schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}
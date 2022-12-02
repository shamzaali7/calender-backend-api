const mongoose = require ('../db/connections')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    isCompleted: {type: Boolean, default: false}
})
const Task = mongoose.model("Task", taskSchema);
mondule.exports = Task;
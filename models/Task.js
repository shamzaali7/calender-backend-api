const mongoose = require ('../db/connections')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    isCompleted: {type: Boolean, default: false},
    dayIndex: Number,
    day: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: "Date"
      }
})

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
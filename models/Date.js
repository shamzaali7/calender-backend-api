const mongoose = require ('../db/connections')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    isCompleted: {type: Boolean, default: false}
})

const dateSchema = new Schema({
    day: Number,
    tasks: [taskSchema]
})

const Date = mongoose.model("Date", dateSchema);
module.exports = Date;
const mongoose = require ('../db/connections')
const Schema = mongoose.Schema;

const dateSchema = new Schema({
    day: Number,
    tasks: {type: mongoose.Schema.Types.ObjectId, ref:"Task"}
})

const Date = mongoose.model("Date", dateSchema);
module.exports = Date;
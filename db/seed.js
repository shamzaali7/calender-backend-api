const mongoose = require("./connections")
const Date = require("../models/Date");
const Task = require("../models/Task");
const seedDay = require("./seedDay.json");
const seedTask = require("./seedTask.json");

const dataArr = seedDay.map((dates) => (
    {day: dates.day}
))


    dataArr.forEach(days => {
        let updateTask = Task.findOne({dayIndex : days.day})
        .then(() => {
            return Date.findOneAndUpdate({day: days.day}, {tasks : updateTask.title}, {new: true})
        })
        .then(console.log)
        .catch(console.error)
        .finally(() => {process.exit()})
    })
    
    

    // monarchs.forEach(monarch => {
    //     Kingdom.findOne({title: monarch.kingdom})
    //     .then(kingdom => {
    //         let id = kingdom._id
    //         return Monarch.findOneAndUpdate({name: monarch.name}, {kingdom: id}, {new: true})
    //     })
    //     .then(console.log)
    //     .catch(console.error)
    //     .finally(() => {process.exit()})
    // })
// const monarchRaw = require('../data/monarchRaw.json');
// const Monarch = require('../../models/Monarch');
// const Kingdom = require('../../models/Kingdom');

// const monarchData = monarchRaw.map(data => ({
//     kingdom: data.kingdom,
//     name: data.name
// }));

// monarchData.forEach((data => {
//     Kingdom.findOne({ title: data.kingdom }).then(kingdom => {
//         let kId = kingdom._id
//         let kName = data.name
//         Monarch.findOneAndUpdate(
//             { name: kName },
//             { kingdom: kId },
//             { new: true }
//         );
//     });
// })); 


const seedDay = require('./seedDay.json')
const Date = require("../models/Date");
const Task = require("../models/Task");

const dateData = seedDay.map((data) => ({
    day: data.day
}))

dateData.forEach((data => {
    Task.findOne({dayIndex: data.day}).then(task =>{
        let tsk = task.title
        let dayNum = data.day 
        Date.findOneAndUpdate(
            {day: dayNum},
            {Task: tsk},
            { new: true }
        ).then(console.log)
        .catch(console.error)
        .finally(() => {
            process.exit();
        });
    })
}))
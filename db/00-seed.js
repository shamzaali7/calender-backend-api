const mongoose = require("./connections")
const Date = require("../models/Date");
const Task = require("../models/Task");
const seedDay = require("./seedDay.json");
const seedTask = require("./seedTask.json");

const dateData = seedDay.map((data) => ({
   day: data.day
}))


const taskData = seedTask.map(data => ({
   title: data.title,
   isCompleted: data.isCompleted,
   dayIndex: data.dayIndex
}))

Date.deleteMany({}).then(() => {
   dateData.forEach(date => {
      Date.create({
         day: date.day
         
      })
   })
})
   
Task.deleteMany({}).then(() => {
   taskData.forEach(task =>{
      Task.create({
         title: task.title,
         isCompleted: task.isCompleted,
         dayIndex: task.dayIndex
      }).then(res => console.log(res))
   })
})


// Monarch.deleteMany({}).then(() => {
//    monarchData.forEach(monarch => {
//       Monarch.create({
//          name: monarch.name,
//          house: monarch.house,
//          start: monarch.start,
//          end: monarch.end,
//          endReason: monarch.endReason
//          // kingdom placeholder
//       }).then(res => console.log(res));
//    });
// });

// Kingdom.deleteMany({}).then(() => {
//    kingdomData.forEach(kingdom => {
//       Kingdom.create({
//          title: kingdom.title,
//          extract: kingdom.extract
//       }).then(res => console.log(res));
//    });
// });

// const monarchRaw = require('../data/monarchRaw.json');
// const kingdomRaw = require('../data/kingdomRaw.json');
// const Monarch = require('../../models/Monarch');
// const Kingdom = require('../../models/Kingdom');

// const monarchData = monarchRaw.map(data => ({
//    name: data.name,
//    house: data.house,
//    start: data.start,
//    end: data.end,
//    endReason: data.endReason
//    // exclude kingdom at this point
// }));

// const kingdomData = kingdomRaw.map(data => ({
//    title: data.title,
//    extract: data.extract
// }));

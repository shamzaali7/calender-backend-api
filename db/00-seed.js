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
         
      }).then(res => console.log(res))
      .then((err) => console.log(err))
   })
})

Task.deleteMany({}).then(() => {
   for(let i=0; i<seedTask.length; i++){
      Task.create({
         title: seedTask[i].title,
         isCompleted: seedTask[i].isCompleted,
         dayIndex: seedTask[i].dayIndex
      }, 
      async function(err, res) {
         Date.findOne({day: res.dayIndex}, async function (err, ress) {
            res.day = ress._id
            await res.save()
         })
      })
}})

// seedTask.forEach((task => {
//    Date.find({day : task.dayIndex})
//    .then((dateObject) => {
//       Task.create({
//          ...task,
//          day: dateObject._id
//       })
//    })
// }))

// Task.deleteMany({})
//    .then(async () => {seedTask.map(task => {
//         return Date.findOne({day : task.dayIndex})
//       })})
//    .then((dateObject) => seedTask.map((tasks) => ({...tasks, day: dateObject._id})))
//    .then((updatedTaskObject) => {
//       console.log(updatedTaskObject)
//       Task.insertMany(updatedTaskObject)})
   

   // .then(console.log)
	// .catch(console.error)
	// .finally(() => {
	// 	process.exit();
	// })
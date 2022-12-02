const Date = require("../models/Date")
const seedData = require("./seed.json")

Date.deleteMany({})
   .then(() => Date.insertMany(seedData))
   .then(console.log(Date))
   .catch(console.error)
   .finally(process.exit)
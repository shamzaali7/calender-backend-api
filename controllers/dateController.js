const express = require("express")

const router = express.Router();

const Date = require("../models/Date");
const Task = require("../models/Task");

router.get("/", async (req, res, next) => {
    try{
        const allDates = await Date.find({})
        res.json(allDates)
    }catch(err){
        next(err)
    }
});

router.get("/:day", async (req, res, next) => {
    try{
        const selectDate = await Date.findOne({day: req.params.day})
        res.json(selectDate)
    }catch(err){
        next(err)
    }
})

module.exports = router;
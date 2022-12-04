const express = require("express")

const router = express.Router();

const Date = require("../models/Date");
const Task = require("../models/Task");

router.get("/", async (req, res, next) => {
    try{
        const allTasks = await Task.find({});
        res.json(allTasks);
    }catch(err){
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try{
        const selectTask = await Task.findOne({_id: req.params.id});
        res.json(selectTask);
    }catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        const day = await Date.findOne({day: parseInt(req.body.dayIndex)})           
        const createTask = await Task.create({
            title: req.body.title, 
            isCompleted: (req.body.isCompleted === "true"), 
            dayIndex: parseInt(req.body.dayIndex),
            day: day._id
        });
        res.status(204).json(createTask);
    }catch(err){
        next(err)
    }
})

router.delete("/:title", async (req, res, next) => {
    try{
        const deleteTask = await Task.findOneAndDelete({title: req.params.title.replace("%20", " ")})
        if(deleteTask){
            res.sendStatus(204).console.log(`${deleteTask} = deleted task`)
        }else{
            res.sendStatus(404)
        }
    }catch(err){
        next(err)
    }
})

router.delete("/delete/:id", async (req, res, next) => {
    try{
        const deleteTask = await Task.findOneAndDelete({_id: req.params.id})
        if(deleteTask){
            res.sendStatus(204).console.log(`${deleteTask} = deleted task`)
        }else{
            res.sendStatus(404)
        }
    }catch(err){
        next(err)
    }
})


module.exports = router;
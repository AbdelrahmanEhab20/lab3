const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const { validationid, validationtodo } = require('../middlewares/validate')
//  Get All Todos

router.get("/", async (req, res, next) => {
    const todos = await Todo.find().populate('user');
    res.json(todos);
});

//  Get specific Todo
router.get("/:id", validationid, async (req, res, next) => {
    const id = req.params.id;
    const todo = await Todo.findById(id).populate('user');
    res.json(todo);
});
// Post
router.post("/", async (req, res, next) => {
    const todo = req.body;
    const newtodo = await Todo.create(todo);
    res.json(newtodo);
});

// 3- Patch (Update)

router.patch("/:id", validationid, async (req, res, next) => {
    const id = req.params.id;
    const todo = req.body;

    await Todo.findByIdAndUpdate(id, todo)
        .then((edit) => res.json("Todo Updated"))
        .catch((element) => next("Can't Find This ID"));
});

// 4- Delete

router.delete("/:id", validationid, async (req, res, next) => {
    const id = req.params.id;
    await Todo.deleteOne({ _id: id })
        .then(data => res.json(data))
        .catch(err => next("Can't find this ID"));
});

module.exports = router;
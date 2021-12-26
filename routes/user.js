const express = require('express')
const router = express.Router();
const User = require("../models/user");
const { validationid, validationtodo } = require('../middlewares/validate')

// Get all user
router.get("/", async (req, res, next) => {
    const users = await User.find().populate("todo");
    res.json(users);
});

// Get specific user
router.get("/:id", validationid, async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id).select("firstname").populate("todo");
    res.json(user);
});
// Post
router.post("/", async (req, res, next) => {
    const user = req.body;
    const newuser = await User.create(user);
    res.json(newuser);
});

// Patch (Update)

router.patch("/:id", validationid, async (req, res, next) => {
    const id = req.params.id;
    const user = req.body;

    await User.findByIdAndUpdate(id, user)
        .then((edit) => res.json("User Updated"))
        .catch((element) => next("Can't FInd This ID"));
});

// Delete

router.delete("/:id", validationid, async (req, res, next) => {
    const id = req.params.id;
    await User.deleteOne({ _id: id })
        .then(data => res.json(data))
        .catch(err => next("Can't find this ID"));
});

module.exports = router;
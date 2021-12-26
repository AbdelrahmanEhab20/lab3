const User = require("../models/user");

const create = (user) => User.create(user);
const find = (users) => User.find(users);
const deleteData = (_id) => User.deleteOne({ _id});
const update = (_id, body) => User.updateOne({ _id }, { body });

module.exports = { create, find, deleteData, update };

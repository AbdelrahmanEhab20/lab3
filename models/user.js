const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 7,
        required: true,
        unique: true,
    },
    firstname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
    },
    todo:{ type: mongoose.SchemaTypes.ObjectId, ref: 'todos' }
})

const user = mongoose.model('User', userSchema);

module.exports = user;
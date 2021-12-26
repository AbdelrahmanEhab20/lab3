const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema(
    {
        tittle: {
            type: String,
            minlength: 3,
            maxlength: 15,
            required: true
        },
        status: {
            type: String,
            default: 'to-do'
        },
        tags: {
            type: [
                {
                    type: String,
                    maxlength: 15,
                }
            ],
        },
        user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' }
    })

const Todo = mongoose.model('todos', todoSchema);

module.exports = Todo;
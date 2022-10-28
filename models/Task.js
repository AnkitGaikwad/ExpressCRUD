const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name cannot exceed 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);


// SCHEMA = structure of the data
// MODEL = representation of the collection
// in mongoose, a model is a wrapper for the schema,
// so if the schema defines the structure for the document
// a mongoose model provides an interface to the db, ie. 
// using model we can perform CRUD operations
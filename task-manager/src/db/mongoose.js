const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', { 
    name: {
        type: String
    },
    age: {
        type: Number 
    }
})

// 


const Task = mongoose.model('Task', {
    description:{
        type: String
    },
    completed:{
        type: Boolean
    }
})

const taskOne = new Task({
    description: "Meditate",
    completed: true 
})

taskOne.save().then(() => {
    console.log(taskOne)
}).catch((error) => {
    console.log(error)
})
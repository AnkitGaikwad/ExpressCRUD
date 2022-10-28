const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./db/connect');
require('dotenv').config();

// setup middleware
app.use(express.static('./public'));
app.use(express.json());
const errorHandlerMiddleware = require('./middleware/error-handler');

// importing routers
const tasks = require('./routes/tasks');
app.use('/api/v1/tasks', tasks);

app.use(errorHandlerMiddleware);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connection established to ATLAS successfully.");
        app.listen(port, console.log(`Server running on port ${port}...`));
    } catch (err) {
        console.log(err);
    }
};

start();

const express = require('express');
const app = express();

const db = require('./db');
const userRoute = require('./routes/user');
// const logger = require 

const PORT = process.env.PORT || 3005;
app.use(express.json());
app.use("/api/users", userRoute);

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.listen(PORT , () => console.log(`listening on port ${PORT}`) )
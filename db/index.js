const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

// let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI|| MONGO_URL;
//
mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology:true, useNewUrlParser:true}).then(()=>{
    console.log('successfuly connected to MongoDB');
}).catch(e =>{
    console.error('connection error', e.message)
})

const db = mongoose.connection

module.exports = db
const mongoose = require('mongoose');

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI|| 'mongodb://localhost/mealsDatabase'

mongoose.connect(MONGODB_URI, {useUnifiedTopology:true, useNewUrlParser:true}).then(()=>{
    console.log('successfuly connected to MongoDB');
}).catch(e =>{
    console.error('connection error', e.message)
})

const db = mongoose.connection

module.exports = db
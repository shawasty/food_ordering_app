const express = require('express');
const app = express();
const db = require('./db');
const dotenv = require("dotenv");

const UserRoute = require('./routes/userRoute');
const AuthRoute = require('./routes/auth');
const MealRoute = require('./routes/mealRoute');
const CartRoute = require('./routes/cartRoute')
const OrderRoute = require('./routes/orderItemRoute')


const PORT = process.env.PORT || 3005;
app.use(express.json());
app.use("/api/users", UserRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/meals", MealRoute);
app.use("/api/carts", CartRoute);
app.use("/api/orders", OrderRoute);



// db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.listen(PORT , () => console.log(`listening on port ${PORT}`) )
// const db = require('../db')
// const Meal = require('../models/meal')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// // use async to make sure database is populated before function is 
// const main = async() => {
  
//     const meals = [
//         {name: 'WAAKYE' ,category: 'LUNCH' , image: '../media/images/waakye.jpeg' , calories: '50.00', price: '$15'},
//         {name: 'BANKU' ,category: 'SUPER' , image: '../media/images/banku.jpeg' , calories: '35.00 ', price: '$25'},
//         {name: 'JOLLOF' ,category: 'LUNCH' , image: '../media/images/jollof.jpeg' , calories: '50.00 ', price: '$20'},
//         {name: 'FULA' ,category: 'BREAKFAST' , image: '../media/images/fula.jpeg' , calories: '30.00', price: '$10'},
//         {name: 'KOKO' ,category: 'BREAKFAST' , image: '../media/images/koko.jpeg' , calories: '30.00', price: '$12'}
//   ]
  

//   await Meal.insertMany(meals)
//   console.log('Created some meals')
// }  

// const run = async () => {
//     await main()
//     db.close()

// }
// run()



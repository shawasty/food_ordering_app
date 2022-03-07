const {Router} = require('express');
const Meal = require('../models/meal');
const router = Router();
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');


//CREATE

router.post("/", verifyTokenAndAdmin, async (req,res)=>{
    const newMeal = new Meal(req.body);

    try {
        const savedMeal = await newMeal.save();  
        res.status(200).json(savedMeal);
    } catch (err) {
        res.status(500).json(err)  
    }
})



//UPDATE

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMeal);
  } catch (err) {
    res.status(500).json(err);
  }
});


//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Meal.findByIdAndDelete(req.params.id);
      res.status(200).json("Meal has been deleted !!");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET MEAL
router.get("/find/:id", async (req, res) => {
      try {
        const meal = await Meal.findById(req.params.id);
        res.status(200).json(meal);

      } catch (err) {
        res.status(500).json(err);
      }
    });

 // GET ALL MEALS
 router.get("/",async (req, res) => {
     // to get for example only the first 5 new users with a querry
     const qNew = req.query.new;
     const qCategory = req.query.category;
    try {
        let meals;
        if (qNew){
            meals = await Meal.find().sort({createdAt: -1}).limit(5)
        } else if (qCategory){
            meals = await Meal.find({category:{$in: qCategory}})
        }else {
            meals = await Meal.find();
        }
        res.status(200).json(meals);


    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;

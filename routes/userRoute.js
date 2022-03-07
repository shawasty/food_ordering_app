const {Router} = require('express');
const User = require('../models/user');
const router = Router();
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
// const controllers = require('../controllers')



//UPDATE
// decide if token is for admin or user
// if(req.user.id === req.params.id || req.user.isAdmin){
// create a function in verifytoken
// }
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    //encrypt jsut like in auth
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECR_KEY
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
//create a verify token 

//DELETE

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted !!");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
      try {
        const user = await User.findById(req.params.id);
        // to prevent revealing all info , do this
        const { password, ...others} = user._doc;
        res.status(200).json(others);

      } catch (err) {
        res.status(500).json(err);
      }
    });

 // GET ALL USERS
 router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const users = await User.find(req.params.id);
      res.status(200).json(users);

    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;

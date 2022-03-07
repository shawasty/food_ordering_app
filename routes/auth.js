const { Router } = require("express");
const router = Router();
const User = require("../models/user");
const CryptoJS = require("crypto-js");

//REGISTER

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    //  bellow is from cryptjs website for hashing pw
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECR_KEY).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req,res) =>{
    try {
        const user = await User.findOne({username: req.body.username });
        !user && res.status(401).json("Wrong credentials !!!")

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECR_KEY);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        //check for wrong credentials
        originalPassword !== req.body.password && res.status(401).json("Wrong credentials !!!")

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }

})
module.exports = router;

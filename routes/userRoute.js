const {Router} = require('express');
const User = require('../models/user');
const router = Router();
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');
// const controllers = require('../controllers')



//UPDATE
// decide if token is for admin or user
// if(req.user.id === req.params.id || req.user.isAdmin){
// create a function in verifytoken
// }
router.put("/:id",verifyTokenAndAuthorization, async (req,res)=>{
    if(req.body.password) {
        //encrypt jsut like in auth
        req.body.password = CryptoJS.AES.encrypt(req.body.password,
         process.env.PASS_SECR_KEY).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set : req.body,
        },
        { new : true }
        );
        res.status(200).json(updatedUser)
        
    } catch (err) {
        res.status(500).json(err);
        
    }

})
//create a verify token 


module.exports = router;
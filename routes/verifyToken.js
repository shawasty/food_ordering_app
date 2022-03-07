const jwt = require("jsonwebtoken");

// const user = require('../models/user');


const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SEC_KEY,(err,user)=>{
            if(err) 
            {res.status(402).json('token not valid')};
            req.user = user;
            next();
        });
        
    } else {
        return res.status(401).json('You are not authenticated!');
        
    }
}

const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();   
        } else{
            res.status(402).json('you are not allowed')
        }
    })
}
// creating access for admin to modify something.
const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();   
        } else{
            res.status(402).json('you are not allowed')
        }
    })
}

module.exports = {
    verifyToken, 
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
}
const {Router} = require('express');
// const controllers = require('../controllers')
const router = Router();
//Read of CRUD
router.get('/usertest',(req,res)=> res.send('usertest is successful'))

router.post("/userposttest",(req,res)=>{
    const username = req.body.username
    res.send('complete')
})
// router.post('/plants')


module.exports = router;
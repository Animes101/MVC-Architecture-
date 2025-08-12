const express=require('express');
const { getUser, saveUser } = require('../controllers/users.controller');
const router=express.Router();

router.get('/user', getUser)
router.post('/user', saveUser)



module.exports=router;
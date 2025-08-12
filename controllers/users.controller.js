const users=require('../models/users.model')
const path = require('path');


exports.getUser = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
};

exports.saveUser=(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;

    const user={
        username,
        password
    }

    users.push(user)


    res.status(201).json({
        success: true,
        users,
    })

}
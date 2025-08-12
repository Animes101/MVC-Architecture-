const users=require('../models/users.model')

exports.getUser=(req,res)=>{

     res.send('user router is here');


}

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
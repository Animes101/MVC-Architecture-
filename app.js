const express=require('express');
const app=express();


const bodyParser = require('body-parser');




// এখানে body-parser use করো
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




const userRouter=require('./routes/users.router');

app.use(userRouter);







module.exports=app;
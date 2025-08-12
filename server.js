const app=require("./app")
const PORT=3000;



app.get('/', (req, res)=>{

    res.send('server is running');

})


// server 
app.listen(PORT, ()=>{

    console.log(`server is running http://localhost:${PORT}`)
})
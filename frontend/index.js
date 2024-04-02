const express = require('express');
const PORT =3000;

const app= express();

function logger(req,res,next){
    console.log(`[${Date.now()}] ${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get("/test",(req,res)=>{
    res.json({ok:true})
})

app.get ('/greet/:name',(req,res)=>{
    res.json({greeting:`hello ${req.params.name}!`})
})
        

app.listen(PORT, ()=>console.log(`SERVER IS NOW LISTENING ON PORT ${PORT}`));
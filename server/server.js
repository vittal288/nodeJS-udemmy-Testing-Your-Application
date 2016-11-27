const express = require('express');
const app = express();

var PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`Server is running with a port on ${PORT}`);
})

app.get('/',(req,res)=>{
    res.status(404).send({
        error:"Page not found",
        name:"VITTAL"
    })
})


app.get('/users',(req,res)=>{

    res.status(200).send([
            {name:'Vittal',age:28},{name:'Akhila',age:26}
    ]);
});

module.exports.app = app;
const express = require('express');
const cors = require('cors');

console.log(require('dotenv').config('./env'));

const app = express();

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


app.get('/countryForm/:country',(req,res)=>{
    console.log("params ",req.params);
    const data = require(`./${req.params.country}.json`);
    console.log(data);
    res.send(data)
})

app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.listen(8080,()=>console.log(`Listening to port 8080`))
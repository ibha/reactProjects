const express = require('express');

const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
 //   res.send('<p>Home</p>');
    res.sendFile('./views/index.html',{root:__dirname})

})
const express = require('express');
const bodyParser = require('body-parser');

var router=require('./router');


var app=express();
const port=process.env.PORT || 3000;


//middleware to read body content
app.use(bodyParser.json());



app.use('/',router);



  app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});

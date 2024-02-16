const express = require('express');
const app = express();
app.use(express.json());
require('../db/config')
const userValidation = require('./routes/userValidation');

app.use('/user',userValidation);

app.listen(3000,()=>{
    console.log("Server is running on port : 3000");
})
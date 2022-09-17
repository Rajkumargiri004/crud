const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser')   

//local file 
const userRoute = require('./router/user.router')

const app = express();

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("Database connected successfully")
})
app.use(cors())
app.use(bodyParser.json())

app.use('/',userRoute);


const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log(`server is running on ${port}`)
})


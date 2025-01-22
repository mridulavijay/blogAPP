const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
require('./db/connection');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const postroute = require('./routes/postRoute');
const PORT = process.env.PORT;

const app = express();
app.use(morgan('dev'));
app.use(cors());

// app.use('/api',userRoute)
app.use('/blog',postroute);
app.use('/user',userRoute);
app.listen(PORT,()=>{
    console.log(`${PORT} is up and running`);
})
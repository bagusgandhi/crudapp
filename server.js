require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./server/database/connection'); 
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080

// bodyParser
app.use(bodyParser.urlencoded({extended:true}));

//static assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));

app.use(morgan('tiny'))

//mongodb connection
connectDB();

app.set('view engine', 'ejs');

//load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, ()=>{
    console.log("server is running on port 3000")
})
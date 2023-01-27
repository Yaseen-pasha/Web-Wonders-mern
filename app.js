const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const path = require("path");
const router = require("./router/auth")
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

dotenv.config({ path: './config.env' });

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router files to make our route easy 
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;

// app.get('/signup', (req, res) => {
//     res.send(`Hello Registration world from the server`);
// });

// const staticPath = path.join(__dirname, './client/build');
// app.use(express.urlencoded({extended:false}));
// app.use(express.static(staticPath));
// app.use(router);


// const staticPath = path.join(__dirname, './client/build');
// app.use(express.static(staticPath));
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, "./client/build/index.html"))
// })

// if(process.env.NODE_ENV=== "production"){
    app.use(express.static("client/build"));
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    }) 
// } 

app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})
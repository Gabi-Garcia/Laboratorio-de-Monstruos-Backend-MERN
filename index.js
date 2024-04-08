require("dotenv").config();
const express = require ("express");
const {connectDB} = require("./src/config/db")

const app = express();
const mongoose = require('mongoose');
const dogRoutes = require('./src/api/routes/dogRoutes');

connectDB();


// Middlewares
app.use(express.json());

//RUTAS
app.use('/', dogRoutes)

app.listen(3000,()=> {
console.log('Server : http://localhost:3000')
})



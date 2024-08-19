require("dotenv").config();
const cors = require('cors');
const express = require ("express");
const {connectDB} = require("./src/config/db")

const app = express();
const mongoose = require('mongoose');
const dogRoutes = require('./src/api/routes/dogRoutes');

connectDB();

// Permite todas las solicitudes de origen cruzado
app.use(cors({
    origin: 'https://laboratorio-de-mounstruos-frontend.vercel.app'
  }));
  
// Middlewares
app.use(express.json());

//RUTAS
app.use('/', dogRoutes)

app.listen(3000,()=> {
console.log('Server : http://localhost:3000')
})



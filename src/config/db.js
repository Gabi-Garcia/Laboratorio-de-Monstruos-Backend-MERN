const mongoose = require("mongoose");



const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("CONECTADO CON ÉXITO A LA DDBB")
    }
    catch(error){
        console.log("ERROR EN LA CONEXIÓN A LA DDBB")
    }
}

module.exports = {connectDB}
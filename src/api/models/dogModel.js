const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // El campo es obligatorio
    maxlength: 8, // Longitud máxima de 8 caracteres
    trim: true // Elimina espacios en blanco al inicio y al final
  },
  type: {
    type: String,
    required: true, // El campo es obligatorio
    maxlength: 8, // Longitud máxima de 8 caracteres
    trim: true // Elimina espacios en blanco al inicio y al final
  },
  age: {
    type: Number,
    required: true, // El campo es obligatorio
    min: 0, // Edad mínima permitida (ejemplo: 0)
    max: 999, // Edad máxima permitida (3 cifras)
    validate: {
      validator: Number.isInteger, // Validar que sea un número entero
      message: '{VALUE} no es un número entero válido' // Mensaje de error si no es entero
    }
  },
  skill: {
    type: String,
    required: true, // El campo es obligatorio
    maxlength: 8, // Longitud máxima de 8 caracteres
    trim: true // Elimina espacios en blanco al inicio y al final
  }
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;


// const mongoose = require('mongoose');

// const dogSchema = new mongoose.Schema({
//     name:String,
//     type:String,
//     age:Number,
//     skill:String
// });
// const Dog = mongoose.model('Dog', dogSchema); 

// module.exports = Dog;


const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dogController');
const notFound = require('../../../middlewares/404');


// Ruta para obtener todos los perros
router.get('/', dogController.getAllDogs); 
//Ruta para crear un perro
router.post('/create', dogController.createDog) 
//Ruta para buscar por _id
router.get('/:id', dogController. getDogById)
//Ruta para actualizar
router.put('/:id', dogController. updateDogById)
//Ruta para eliminar
router.delete('/:id', dogController.deleteDogById)

//Ruta no encontrada
router.use(notFound)


module.exports = router;
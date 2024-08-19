const Dog = require('../models/dogModel')


//READ
const getAllDogs = async(req, res, next)=>{
    try {
        const dogs = await Dog.find();
        res.status(200).json(dogs)
        console.log('Controlador getAllDogs')
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//CREATE 
const createDog = async (req, res, next)=> {
    try {
        console.log('create dog')
        const {name, type, age, skill} = req.body;
        const newDog = new Dog({name, type, age, skill});
        await newDog.save()
        res.status(201).json({
            dog:newDog,
            message:'Perrito creado correctamente'
    })
    } catch (error) {
        res.status(500).json({ message: 'Error al crear un nuevo perro' });
    }
}

//GET BY ID
const getDogById = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const dog = await Dog.findById(id)
        res.status(200).json(dog)
    } catch (error) {
        return res.status(404).json({ message: 'No se encontró ningún perro con el ID proporcionado' });
    }
}

//UPDATE
const updateDogById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const { type }= req.body;
        const { age } = req.body;
        const { skill } = req.body;

         // Validar que todos los campos requeridos están presentes
        if (!name || !type || !age || !skill) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
        
        if (name.length > 8 ){
            return res.status(400).json({ message: 'nombre no puede exeder los 8 caracteres' });
        }
        if (type.length > 8 ){
            return res.status(400).json({ message: 'type no puede exeder los 8 caracteres' });
        }
        if (skill.length > 8 ){
            return res.status(400).json({ message: 'skill no puede exeder los 8 caracteres' });
        }

         // Validar que el campo name sea estrictamente un string (sin números)
         const nameRegex = /^[A-Za-z]+$/;
         if (!nameRegex.test(name)) {
         return res.status(400).json({ message: 'El nombre debe ser un string y no puede contener números' });
         }

       // Convertir age a un número flotante primero
         const parsedAge = Number(age);

        // Validar que el campo age sea un número entero dentro del rango 0-999
         if (!Number.isInteger(parsedAge) || parsedAge > 999 || parsedAge < 0) {
         return res.status(400).json({ message: 'La edad debe ser un número entero entre 0 y 999' });
         }

        // Buscar y actualizar el perro por su _id en la base de datos
        const updatedDog = await Dog.findByIdAndUpdate(id, {name, type, age, skill}, {new: true})

        if (!updatedDog) {
            return res.status(404).json({ message: 'Perro no encontrado' });
        }
        res.status(200).json(updatedDog)
        
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar por ID' });
    }
}

//DELETE
const deleteDogById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { type, name, age, skill }= req.body;
        
        // Buscar y eliminar el perro por su id
        const deletedDog = await Dog.findByIdAndDelete(id, {type, name, age, skill}, {new: true})
        res.status(200).json(deletedDog)
        console.log('Perrito eliminado con éxito')
    } catch (error) {
        res.status(500).json({ message: 'Error aleliminar el perro por ID' });
    }
}


module.exports = {
    getAllDogs,
    createDog,
    getDogById,
    updateDogById,
    deleteDogById
}
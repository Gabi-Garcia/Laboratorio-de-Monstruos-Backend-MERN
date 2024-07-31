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
        const {name, type} = req.body;
        const newDog = new Dog({name, type});
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
        const { type }= req.body;
        
         // Verificar si el nuevo tipo fue proporcionado
        if (!type) {
            return res.status(400).json({ message: 'El type del perro es obligatorio' });
        }
        // Buscar y actualizar el perro por su _id en la base de datos
        const updatedDog = await Dog.findByIdAndUpdate(id, {type}, {new: true})
        res.status(200).json(updatedDog)
        
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el tipo del perro por ID' });
    }
}

//DELETE
const deleteDogById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { type, name }= req.body;
        
        // Buscar y eliminar el perro por su id
        const deletedDog = await Dog.findByIdAndDelete(id, {type, name}, {new: true})
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
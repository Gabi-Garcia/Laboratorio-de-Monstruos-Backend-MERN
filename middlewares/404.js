//Middleware para manejar una petición a Ruta no encontrada.
const notFound = (req, res, next) =>{
    res.status(404).json({message:'Ruta no encontrada'})
}
module.exports = notFound
const propuestaServices = require('../services/propuestaService');
const Propuesta = require('../models/propuesta'); // Asegúrate de usar la ruta correcta a tu modelo

// Crear una propuesta
async function create(req, res) {
  try {
    const { titulo, area, informacion, imagen } = req.body;
    const propuestaData = { titulo, area, informacion, imagen };
    const propuesta = await propuestaServices.createPropuesta(propuestaData);
    res.status(201).json({
      message: "Propuesta creada con éxito",
      data: propuesta,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAll(req, res) {
  try {
    const propuesta = await Propuesta.findAll(); // Esto devuelve todas las propuestas
    res.status(200).json(propuesta);
  } catch (error) {
    console.error('Error al obtener las propuestas:', error);
    res.status(500).json({ error: 'Error al obtener las propuestas' });
  }
}


// Editar propuesta
async function updatePropuesta(req, res) {
  try {
    const { id } = req.params;
    const { titulo, area, informacion, imagen } = req.body;
    const propuesta = await propuestaServices.updatePropuesta(id, { titulo, area, informacion, imagen });
    res.status(200).json(propuesta);
  } catch (error) {
    console.error('Error al editar la propuesta:', error);
    res.status(500).json({ error: 'Error al editar la propuesta' });
  }
}


// Eliminar propuesta
// servicio de propuesta (propuestaService.js)
// Eliminar propuesta
async function deletePropuesta(req, res) {
  try {
    const { id } = req.params;
    const propuesta = await propuestaServices.deletePropuesta(id);
    res.status(200).json({ message: 'Propuesta eliminada con éxito', propuesta });
  } catch (error) {
    console.error('Error al eliminar la propuesta:', error.message);  // Log para debug
    res.status(500).json({ error: 'Error al eliminar la propuesta: ' + error.message });
  }
}

// // Obtener una propuesta por ID
// async function getById(req, res) {
//   try {
//     const propuesta = await propuestaServices.getPropuestaById(req.params.id);
//     res.status(200).json(propuesta);
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// }

module.exports = {
  create,
  getAll,
  // getById,
  updatePropuesta,
  deletePropuesta
};

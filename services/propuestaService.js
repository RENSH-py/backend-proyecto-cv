const Propuesta = require('../models/propuesta');

// Crear una nueva propuesta
async function createPropuesta(data) {
  try {
    const propuesta = await Propuesta.create(data);
    return propuesta;
  } catch (error) {
    throw new Error("Error al crear la propuesta: " + error.message);
  }
}

// Obtener todas las propuestas
async function getAllPropuestas() {
  try {
    const propuesta = await Propuesta.findAll();
    return propuesta;
  } catch (error) {
    throw new Error("Error al obtener las propuestas: " + error.message);
  }
}

// Obtener una propuesta por ID
async function getPropuestaById(id) {
  try {
    const propuesta = await Propuesta.findByPk(id);
    if (!propuesta) {
      throw new Error("Propuesta no encontrada");
    }
    return propuesta;
  } catch (error) {
    throw new Error("Error al obtener la propuesta: " + error.message);
  }
}

// Editar una propuesta
async function updatePropuesta(id, data) {
  try {
    const propuesta = await Propuesta.findByPk(id);
    if (!propuesta) {
      throw new Error("Propuesta no encontrada");
    }

    // Actualiza la propuesta
    await propuesta.update(data);
    return propuesta;
  } catch (error) {
    throw new Error("Error al editar la propuesta: " + error.message);
  }
}

// Eliminar una propuesta
async function deletePropuesta(id) {
  try {
    const propuesta = await Propuesta.findByPk(id);
    if (!propuesta) {
      throw new Error("Propuesta no encontrada");
    }
    await propuesta.destroy();
    return propuesta;
  } catch (error) {
    throw new Error("Error al eliminar la propuesta: " + error.message);
  }
}

module.exports = {
  createPropuesta,
  getAllPropuestas,
  getPropuestaById,
  updatePropuesta,
  deletePropuesta
};

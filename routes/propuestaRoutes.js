const express = require('express');
const router = express.Router();
const propuestaController = require('../controllers/propuestaController');

// Ruta para crear una propuesta
router.post('/create', propuestaController.create);

// Ruta para obtener todas las propuestas
router.get('/getAll', propuestaController.getAll);

// Ruta para obtener una propuesta por ID
// router.get('/getById/:id', propuestaController.getById);

router.put('/editar/:id', propuestaController.updatePropuesta);
router.delete('/eliminar/:id', propuestaController.deletePropuesta);

module.exports = router;

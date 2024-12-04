const express = require('express');
const router = express.Router();
const postulantesService = require('../services/postulantesServices');

// Crear un postulante
router.post('/create', async (req, res) => {
    try {
      const postulante = await postulantesService.createPostulante(req.body);
      res.status(201).json({
        message: 'Postulante creado con éxito',
        data: postulante,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  });
  
  // Obtener todos los postulantes
  router.get('/getAll', async (req, res) => {
    try {
      const postulantes = await postulantesService.getAllPostulantes();
      res.json(postulantes);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  });
  
  // Obtener un postulante por ID
  router.get('/getById/:id', async (req, res) => {
    try {
      const postulante = await postulantesService.getAllPostulantesById(req.params.id);
      if (!postulante) {
        return res.status(404).json({ message: 'Postulante no encontrado' });
      }
      res.json(postulante);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  });
  
  // Actualizar un postulante
  router.put('/update/:id', async (req, res) => {
    try {
      const postulante = await postulantesService.updatePostulante(req.params.id, req.body);
      if (!postulante) {
        return res.status(404).json({ message: 'Postulante no encontrado' });
      }
      res.json({
        message: 'Postulante actualizado con éxito',
        data: postulante,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  });
  
  // Eliminar un postulante
  router.delete('/delete/:id', async (req, res) => {
    try {
      const result = await postulantesService.deletePostulanteById(req.params.id);
      if (!result) {
        return res.status(404).json({ message: 'Postulante no encontrado' });
      }
      res.json({ message: 'Postulante eliminado con éxito' });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  });
  
  module.exports = router;
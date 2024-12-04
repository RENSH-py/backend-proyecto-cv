const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexiondb');

const Propuesta = sequelize.define('Propuesta', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  informacion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING, // Almacena el nombre del archivo o URL de la imagen
    allowNull: true,
  },
}, {
  timestamps: false,  // Desactivar los timestamps automáticos (createdAt, updatedAt)
  tableName: 'propuestas', // Nombre personalizado de la tabla
});

module.exports = Propuesta;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Specialite = sequelize.define('Specialite', {
  id:           { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  nom:          { type: DataTypes.STRING(100), allowNull: false },
  categorie_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
}, {
  tableName: 'specialite',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Specialite;
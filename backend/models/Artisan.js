const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
  id:              { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  nom:             { type: DataTypes.STRING(150), allowNull: false },
  specialite_id:   { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  localisation:    { type: DataTypes.STRING(200), allowNull: false },
  note:            { type: DataTypes.DECIMAL(2,1), defaultValue: 0 },
  photo:           { type: DataTypes.STRING(255), allowNull: true },
  a_propos:        { type: DataTypes.TEXT, allowNull: true },
  email:           { type: DataTypes.STRING(150), allowNull: false },
  site_web:        { type: DataTypes.STRING(255), allowNull: true },
  artisan_du_mois: { type: DataTypes.BOOLEAN, defaultValue: false },
}, {
  tableName: 'artisan',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Artisan;
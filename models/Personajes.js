// models/Personaje.js
module.exports = (sequelize, DataTypes) => {
  const Personajes = sequelize.define("Personajes", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    altura: DataTypes.STRING,
    masa: DataTypes.STRING,
    color_cabello: DataTypes.STRING,
    color_piel: DataTypes.STRING,
    color_ojos: DataTypes.STRING,
    ano_nacimiento: DataTypes.STRING,
    genero: DataTypes.STRING,
    mundo_natal: DataTypes.STRING,
    peliculas: DataTypes.JSON,
    especies: DataTypes.JSON,
    vehiculos: DataTypes.JSON,
    naves_estelares: DataTypes.JSON,
    creado: DataTypes.DATE,
    editado: DataTypes.DATE,
    url: DataTypes.STRING,
  });

  return Personajes;
};
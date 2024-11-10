"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Personajes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      altura: {
        type: Sequelize.STRING,
      },
      masa: {
        type: Sequelize.STRING,
      },
      color_cabello: {
        type: Sequelize.STRING,
      },
      color_piel: {
        type: Sequelize.STRING,
      },
      color_ojos: {
        type: Sequelize.STRING,
      },
      ano_nacimiento: {
        type: Sequelize.STRING,
      },
      genero: {
        type: Sequelize.STRING,
      },
      mundo_natal: {
        type: Sequelize.STRING,
      },
      peliculas: {
        type: Sequelize.JSON,
      },
      especies: {
        type: Sequelize.JSON,
      },
      vehiculos: {
        type: Sequelize.JSON,
      },
      naves_estelares: {
        type: Sequelize.JSON,
      },
      creado: {
        type: Sequelize.DATE,
      },
      editado: {
        type: Sequelize.DATE,
      },
      url: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Personajes");
  },
};

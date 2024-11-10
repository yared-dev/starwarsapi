const axios = require("axios");
const { sequelize } = require("./models/index");
const { Personajes } = require("./models/index");

const RequestPersonaje = {
  nombre: null,
  altura: null,
  masa: null,
  color_cabello: null,
  color_piel: null,
  color_ojos: null,
  ano_nacimiento: null,
  genero: null,
  mundo_natal: null,
  peliculas: null,
  especies: null,
  vehiculos: null,
  naves_estelares: null,
  creado: null,
  editado: null,
  url: null,
};

const translationMap = {
  name: "nombre",
  height: "altura",
  mass: "masa",
  hair_color: "color_cabello",
  skin_color: "color_piel",
  eye_color: "color_ojos",
  birth_year: "ano_nacimiento",
  gender: "genero",
  homeworld: "mundo_natal",
  films: "peliculas",
  species: "especies",
  vehicles: "vehiculos",
  starships: "naves_estelares",
  created: "creado",
  edited: "editado",
  url: "url",
  residents: "residentes",
  rotation_period: "periodo_rotacion",
  orbital_period: "periodo_orbitacion",
  diameter: "diametro",
  climate: "clima",
  gravity: "gravity",
  terrain: "terrain",
  surface_water: "surface_water",
  population: "poblacion",
};

const translateKeys = (data) =>
  data.map((element) =>
    Object.fromEntries(
      Object.entries(element).map(([key, val]) => [
        translationMap[key] || key,
        val,
      ])
    )
  );

module.exports.getPersonajes = async () => {
  try {
    const response = await axios.get(`${process.env.SWAPI_URL}/people/`);
    const personajes = await translateKeys(response.data.results);
    return {
      statusCode: 200,
      body: JSON.stringify(personajes),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al obtener personajes" }),
    };
  }
};

module.exports.addPersonaje = async (event) => {
  const {
    nombre,
    altura,
    masa,
    color_cabello,
    color_piel,
    color_ojos,
    ano_nacimiento,
    genero,
    mundo_natal,
    peliculas,
    especies,
    vehiculos,
    naves_estelares,
    creado,
    editado,
    url,
  } = JSON.parse(event.body);

  try {
    await sequelize.sync();

    const personaje = await Personajes.create({
      nombre,
      altura,
      masa,
      color_cabello,
      color_piel,
      color_ojos,
      ano_nacimiento,
      genero,
      mundo_natal,
      peliculas,
      especies,
      vehiculos,
      naves_estelares,
      creado,
      editado,
      url,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Personaje agregado exitosamente",
        personaje,
      }),
    };
  } catch (error) {
    console.error("Error al agregar personaje:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al agregar personaje" }),
    };
  }
};

module.exports.getStoredPersonajes = async () => {
  try {
    const personajes = await Personajes.findAll();

    return {
      statusCode: 200,
      body: JSON.stringify(personajes),
    };
  } catch (error) {
    console.error("Error consultando personajes:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Error al obtener personajes almacenados",
      }),
    };
  }
};

module.exports.getPlanets = async () => {
  try {
    const response = await axios.get(`${process.env.SWAPI_URL}/planets/`);
    const personajes = await translateKeys(response.data.results);
    return {
      statusCode: 200,
      body: JSON.stringify(personajes),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error al obtener personajes" }),
    };
  }
};

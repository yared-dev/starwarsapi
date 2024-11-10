# Proyecto Starwars API

Este proyecto proporciona una API para gestionar personajes de Star Wars. Utiliza **Serverless Framework** para el despliegue en AWS y **Sequelize** como ORM para la base de datos MySQL.

## Requisitos previos
- **Node.js** (versión 14.x o superior)
- **MySQL**
- **Serverless Framework** (instalado globalmente)

## Instalación

### 1. Clonar el repositorio
git clone <url-del-repositorio>
cd nombre-del-repositorio

## 2. Instalar dependencias
npm install

## 3. Instalar dependencias
CREATE DATABASE nombre_de_la_base_de_datos;

## 4. migracion

npx sequelize-cli db:migrate

## 5. run local

serverless offline

# json prueba

 {
        "nombre": "test test tes",
        "altura": "173",
        "masa": "73",
        "color_cabello": "blond",
        "color_piel": "fair",
        "color_ojos": "blue",
        "ano_nacimiento": "1995",
        "genero": "male",
        "mundo_natal": "https://swapi.dev/api/planets/1/",
        "peliculas": [
            "https://swapi.dev/api/films/1/"
        ],
        "especies": [],
        "vehiculos": [
            "https://swapi.dev/api/vehicles/30/"
        ],
        "naves_estelares": [
            "https://swapi.dev/api/starships/22/"
        ],
        "creado": "2014-12-09T13:50:51.644000Z",
        "editado": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
}
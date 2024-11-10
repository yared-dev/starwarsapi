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

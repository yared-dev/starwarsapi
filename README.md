Proyecto Starwars API
Este proyecto proporciona una API para gestionar personajes de Star Wars. Utiliza Serverless Framework para despliegue en AWS y Sequelize como ORM para la base de datos MySQL.

Requisitos previos
Node.js (versión 14.x o superior)
MySQL
Serverless Framework (instalado globalmente)
Instalación
1. Clonar el repositorio
bash
Copiar código
git clone <url-del-repositorio>
cd nombre-del-repositorio
2. Instalar dependencias
Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

bash
Copiar código
npm install
3. Configuración de la base de datos
Crea una base de datos MySQL con el nombre que prefieras. Asegúrate de que el nombre sea coherente con el especificado en config/config.json o en la configuración de Sequelize.

sql
Copiar código
CREATE DATABASE nombre_de_la_base_de_datos;
Configura las credenciales de tu base de datos en el archivo config/config.json, o si estás usando variables de entorno, asegúrate de que se definen en .env.

4. Realizar migraciones
Ejecuta el siguiente comando para crear las tablas necesarias en tu base de datos:

bash
Copiar código
npx sequelize-cli db:migrate
5. Ejecutar el proyecto en modo local
Inicia el servidor en modo offline para pruebas locales:

bash
Copiar código
serverless offline
Endpoints disponibles
GET /personajes - Obtiene una lista de personajes desde la API de Star Wars.
POST /personaje - Agrega un personaje a la base de datos.
GET /personajes/almacenados - Obtiene una lista de personajes almacenados en la base de datos.
Despliegue en AWS
Para desplegar en AWS, asegúrate de tener configuradas tus credenciales de AWS y ejecuta:

bash
Copiar código
serverless deploy
Notas adicionales
Asegúrate de tener MySQL en ejecución y accesible en el puerto configurado.
Puedes modificar las configuraciones del puerto de la base de datos y otros detalles en el archivo .env o en config/config.json según el entorno de desarrollo o producción.
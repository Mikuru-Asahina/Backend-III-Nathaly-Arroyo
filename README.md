🐾 Backend Proyecto Adoptme

Este proyecto es una API Backend desarrollada con Node.js, Express y MongoDB, que implementa una arquitectura en capas:

Controllers → Services → Repository → DAO → DTO → Model → MongoDB

Incluye módulos de Users, Pets, Mocking y Adoptions, además de generación de datos falsos con Faker y encriptación de contraseñas con Bcrypt.

La aplicación está preparada para ejecutarse tanto localmente como mediante Docker.

🐳 Imagen en DockerHub

Puedes acceder a la imagen publicada en DockerHub aquí:

https://hub.docker.com/r/TU_USUARIO/backend-pets-api

📦 Construir la imagen Docker

Desde la raíz del proyecto ejecuta:

docker build -t backend-pets-api .

▶ Ejecutar el contenedor

docker run -p 8080:8080 backend-pets-api

⬇ Descargar la imagen desde DockerHub

docker pull TU_USUARIO/backend-pets-api
docker run -p 8080:8080 TU_USUARIO/backend-pets-api

📁 Estructura base

src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── dao/
 ├── dto/
 ├── models/
 ├── routes/
 ├── utils/
 └── app.js


# 🐾 Backend Proyecto Adoptme

Este proyecto es una API Backend desarrollada con Node.js, Express y MongoDB, que implementa una arquitectura en capas:

Controller → Service → Repository → DAO → DB
                     ↓
                    DTO

La cual utiliza el metodo de SRP (Single Responsibility Principle) para separar responsabilidades 

Incluye módulos de Users, Pets, Mocking y Adoptions, además de generación de datos falsos con Faker y encriptación de contraseñas con Bcrypt.

La aplicación está preparada para ejecutarse tanto localmente como mediante Docker.

## 🐳 Docker Deployment

Este proyecto se encuentra dockerizado y publicado en Docker Hub.

📦 Imagen pública

docker pull nastarro/backend_3-api:1.0

🚀 Ejecutar contenedor

docker run -p 8080:8080 --env-file .env nastarro/backend_3-api:1.0

## ☁️ Base de Datos en la Nube

La base de datos se encuentra alojada en MongoDB Atlas, servicio cloud oficial de MongoDB.

No se utiliza MongoDB local ni contenedor adicional.

## 📌 Tests de adopción utilizando Swagger UI

La documentación está disponible en: http://localhost:8080/docs

A continuación se resumen las principales rutas del sistema.

| Método | Ruta                        |Descripción
| ------ | --------------------------- |---------------------------
| POST   | /api/users                  | Crea un nuevo usuario
| GET    | /api/users                  | Obtiene todos los usuarios
| GET    | /api/users/{uid}            | Obtiene un usuario por id
| PUT    | /api/users/{uid}            | Actualiza un usuario
| DELETE | /api/users/{uid}            | Elimina un usuario
| POST   | /api/users/{uid}/pets/{pid} | Asigna una mascota a un usuario



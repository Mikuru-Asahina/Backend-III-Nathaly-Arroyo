import express from "express"

// Configuración y conexión
import envs from "./config/envs.js"
import { connectDB } from "./config/db.js"

// Routers
import mocksRouter from "./routes/mocks.router.js"
import usersRouter from "./routes/users.router.js"
import petsRouter from "./routes/pets.router.js"

//settings
const app = express()
app.set("PORT", envs.PORT)
const port = envs.PORT || 3000

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Montar routers 
app.use("/api/mocks", mocksRouter)
app.use("/api/users", usersRouter)
app.use("/api/pets", petsRouter)

// Conexión a MongoDB
try {
    await connectDB()
    app.listen(envs.PORT, () =>
        console.log(`Servidor corriendo en el puerto ${envs.PORT}`)
    );
} catch (err) {
    console.error("Error al iniciar el servidor:", err)
}

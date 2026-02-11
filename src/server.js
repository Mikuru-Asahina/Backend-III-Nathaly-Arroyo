import app from "./app.js"
import envs from "./config/envs.js"
import { connectDB } from "./config/db.js"

const port = envs.PORT || 3000

export const startServer = async () => {
    try {
        await connectDB()
        const server = app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto ${port}`)
        })
        server.on("error", (error) => {
            console.error(`❌ Error del servidor al correr el puerto ${port}`, error.message)
            process.exit(1)
        })
        return server

    } catch (error) {
        console.error("❌ Error al iniciar la aplicación:", error.message)
        process.exit(1)
    }
}

startServer()

//👉 Este archivo server.js se usa solo cuando se corre la app, no se utiliza 
// para realizar los tests, por eso su creación

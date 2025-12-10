import mongoose from "mongoose"
import envs from "./envs.js"

export async function connectDB() {
    try {
        if (!envs.MONGODB_URL) {
        throw new Error(
            "La variable de entorno mongodb_url está undefined. Revisa tu .env y asegúrate de lanzarlo con --env-file."
        )
        }
        await mongoose.connect(envs.MONGODB_URL)
        console.log("MongoDB conectado")
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error.message)
        process.exit(1)
    }
}

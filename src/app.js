import cors from "cors"
import express from "express"
import { specs, swaggerUi } from "./docs/info.js"

// Routers
import mocksRouter from "./routes/mocks.router.js"
import usersRouter from "./routes/users.router.js"
import petsRouter from "./routes/pets.router.js"
import adoptionsRouter from './routes/adoption.router.js'

//settings
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//DOcumentación Users
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs))

// Montar routers 
app.use("/api/mocks", mocksRouter)
app.use("/api/users", usersRouter)
app.use("/api/pets", petsRouter)
app.use("/api/adoptions",adoptionsRouter)

export default app
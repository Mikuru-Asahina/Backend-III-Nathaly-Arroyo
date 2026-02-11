import { expect } from "chai"
import supertest from "supertest"
import app from "../src/app.js"
import { connectDB } from "../src/config/db.js"
import mongoose from "mongoose"
import { UserModel } from "../src/dao/models/users.model.js"
import { PetModel } from "../src/dao/models/pets.model.js"

const requester = supertest(app)

let userId
let petId
let adoptionId

before(async function () {
    this.timeout(15000)
    await connectDB()
})

beforeEach(async function () {
    this.timeout(15000)
    // Limpiar colecciones
    await UserModel.deleteMany({})
    await PetModel.deleteMany({})
    // Crear usuario
    const uniqueEmail = `asahina_${Date.now()}@test.com`
    const userRes = await requester.post("/api/users").send({
        first_name: "Mikuru",
        last_name: "Asahina",
        email: uniqueEmail,
        age: 25,
        password: "123456",
        role: "user"
    })
    expect(userRes.status).to.equal(200)
    userId = userRes.body.payload._id || userRes.body.payload.id
    // Crear mascota
    const petRes = await requester.post("/api/pets").send({
        name: "Gringasha",
        specie: "cat",
        adopted: false
    })
    expect(petRes.status).to.equal(200)
    petId = petRes.body.payload._id || petRes.body.payload.id
})
after(async () => {
    await mongoose.connection.close()
})

describe("Tests de adopción", function () {
    it("GET /api/adoptions - debe listar adopciones", async function () {
        const res = await requester.get("/api/adoptions")
            expect(res.status).to.equal(200)
            expect(res.body.status).to.equal("success")
            expect(res.body.payload).to.be.an("array")
    })
    it("POST /api/adoptions/:uid/:pid - debe crear adopción", async function () {
        const res = await requester.post(`/api/adoptions/${userId}/${petId}`)
            expect(res.status).to.equal(200)
            expect(res.body.status).to.equal("success")
            expect(res.body.payload).to.have.property("user")
            expect(res.body.payload).to.have.property("pet")
        adoptionId = res.body.payload._id || res.body.payload.id
    })
    it("POST /api/adoptions/:uid/:pid - debe marcar mascota como adoptada", async function () {
        await requester.post(`/api/adoptions/${userId}/${petId}`)
        const pet = await PetModel.findById(petId)
            expect(pet.adopted).to.equal(true)
            expect(pet.owner.toString()).to.equal(userId)
    })
    it("GET /api/adoptions/:aid - debe traer adopción", async function () {
        const create = await requester.post(`/api/adoptions/${userId}/${petId}`)
        adoptionId = create.body.payload._id || create.body.payload.id
        const res = await requester.get(`/api/adoptions/${adoptionId}`)
            expect(res.status).to.equal(200)
            expect(res.body.status).to.equal("success")
            expect(res.body.payload).to.have.property("user")
            expect(res.body.payload).to.have.property("pet")
    })
    it("POST /api/adoptions/:uid/:pid - error mascota ya adoptada", async function () {
    await requester.post(`/api/adoptions/${userId}/${petId}`)
    const res = await requester.post(`/api/adoptions/${userId}/${petId}`)
        expect(res.status).to.equal(400)
        expect(res.body.status).to.equal("error")
        expect(res.body.message).to.equal("Mascota YA adoptada")
    })
    it("GET /api/adoptions/:aid - error id inválido", async function () {
        const res = await requester.get(`/api/adoptions/123`)
            expect(res.status).to.equal(400)
            expect(res.body.status).to.equal("error")
            expect(res.body.message).to.exist
    })
    it("POST /api/adoptions/:uid/:pid - error ids inválidos", async function () {
        const res = await requester.post(`/api/adoptions/123/456`)
            expect(res.status).to.equal(400)
            expect(res.body.status).to.equal("error")
            expect(res.body.message).to.exist
    })
    it("POST /api/adoptions/:uid/:pid - error usuario inexistente", async function () {
        const fakeId = "64b000000000000000000000"
        const res = await requester.post(`/api/adoptions/${fakeId}/${petId}`)
            expect(res.status).to.equal(404)
            expect(res.body.status).to.equal("error")
            expect(res.body.message).to.equal("Usuario no encontrado")
    })
    it("POST /api/adoptions/:uid/:pid - error mascota inexistente", async function () {
        const fakeId = "64b000000000000000000000"
        const res = await requester.post(`/api/adoptions/${userId}/${fakeId}`)
            expect(res.status).to.equal(404)
            expect(res.body.status).to.equal("error")
            expect(res.body.message).to.equal("Mascota no encontrada")
    })
})


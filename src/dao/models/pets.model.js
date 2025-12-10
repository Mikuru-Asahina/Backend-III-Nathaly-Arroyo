import mongoose from "mongoose"

const petSchema = new mongoose.Schema({
    name: String,
    specie: String,
    adopted: Boolean
})

export const PetModel = mongoose.model("Pet", petSchema)

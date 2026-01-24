import mongoose from "mongoose"

const petSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    specie: { 
        type: String, 
        required: true 
    },
    adopted: { 
        type: Boolean, 
        default: false 
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

export const PetModel = mongoose.model("Pet", petSchema)

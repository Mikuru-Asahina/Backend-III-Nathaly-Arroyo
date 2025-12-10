import mongoose from "mongoose"
import isEmail from "validator/lib/isEmail.js"
//import validator from "validator"

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, "first_name is required"],
            trim: true
        },
        last_name: {
            type: String,
            required: [true, "last_name is required"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true, 
            trim: true,
            lowercase: true,
            //match: [/^\S+@\S+\.\S+$/, "Invalid email format"] // OPCIONAL para pruebas
            validate: {
                validator: (v) => isEmail(v),
                message: props => `${props.value} is not a valid email`
            }
        },
        age: {
            type: Number,
            required: true,
            min: [18, "Minimum age is 18"]
        },
        password: {
            type: String,
            required: [true, "Password is required"] 
        },
        orders: [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Order" 
        }],
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user", 
        },
        cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Cart",
            default: null
        },
        pets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pet"
        }
        ]
    }, 
    {
        timestamps: true 
    }
)

export const UserModel = mongoose.model("User", userSchema)


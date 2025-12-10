import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

export default class Mocking {
    //Genera UNA mascota con formato compatible con Mongo
    static generatePet() {
        return {
            name: faker.animal.petName(),
            specie: faker.animal.type(),
            adopted: faker.datatype.boolean(),
        };
    }
    //Genera UN usuario con contraseña encriptada, pets vacío, formato Mongo
    static generateUser() {
        return {
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email().toLowerCase(), 
            password: bcrypt.hashSync("coder123", 10),
            role: faker.helpers.arrayElement(["user", "admin"]),
            pets: [],
            age: faker.number.int({ min: 18, max: 80 }),
        };
    }
    //Genera múltiples usuarios
    static generateUsers(quantity = 50) {
        return Array.from({ length: quantity }, () => this.generateUser())
    }
    //Genera múltiples mascotas
    static generatePets(quantity = 50) {
        return Array.from({ length: quantity }, () => this.generatePet())
    }
}

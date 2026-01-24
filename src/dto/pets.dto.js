export default class PetsDTO {
    constructor(pet) {
        this.id = pet._id;
        this.name = pet.name;
        this.specie = pet.specie;
        this.adopted = pet.adopted;
    }
}

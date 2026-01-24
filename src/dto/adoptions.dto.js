export default class AdoptionsDTO {
    constructor(adoption) {
        this.id = adoption._id;
        this.user = adoption.user;
        this.pet = adoption.pet;
        this.date = adoption.date;
    }
}

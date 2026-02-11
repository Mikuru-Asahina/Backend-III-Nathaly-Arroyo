export default class UsersDTO {
    constructor(user) {
        if (!user) return;

        this.id = user._id?.toString();
        this.name = `${user.first_name} ${user.last_name}`
        this.email = user.email
        this.role = user.role
        this.age = user.age
        this.pets = (user.pets || []).map(p => p.toString())
    }
}

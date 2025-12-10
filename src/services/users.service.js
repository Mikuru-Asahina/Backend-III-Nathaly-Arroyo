import UsersDAO from "../dao/users.dao.js"

export default class UsersService {
    constructor() {
        this.usersDAO = new UsersDAO()
    }

    insertMany(users) {
        return this.usersDAO.insertMany(users)
    }
}

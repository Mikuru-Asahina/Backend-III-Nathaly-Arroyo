import { UserModel } from "./models/users.model.js"

export default class UsersDAO {
    insertMany(users) {
        return UserModel.insertMany(users)
    }
}
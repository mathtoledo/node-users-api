import { UserModel, User } from "../models/user"

class CreateUserService {
  public async handle(data: User) {
    try {
      const user = await UserModel.create(data)
      return user
    } catch (error) {
      console.log(error)
    }
  } 
}

export default new CreateUserService()

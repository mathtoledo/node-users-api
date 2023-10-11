import { UserModel } from "../models/user"

class FetchUsersService {
  public async handle() {
    try {
      const users = await UserModel.find({})
      return users
    } catch (error) {
      console.log(error)
    }
  } 
}

export default new FetchUsersService()

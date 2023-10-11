import { UserModel, User } from "../models/user"

class UpdateUsersService {
  public async handle(id: string, data: User) {
    try {
      const user = await UserModel.findByIdAndUpdate({ _id: id }, data, { new: true })
      if (!user) {
        return "Usuário não encontrado"
      }
      return user
    } catch (error) {
      console.log(error)
    }
  } 
}

export default new UpdateUsersService()

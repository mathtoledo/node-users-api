import { UserModel } from "../models/user"

class ExcluirUserService {
  public async handle(id: string) {
    try {
      const user = await UserModel.findByIdAndDelete(id)
      if (!user) {
        return 'Usuário não encontrado'
      }
    } catch (error) {
      console.log(error)
    }
  } 
}

export default new ExcluirUserService()

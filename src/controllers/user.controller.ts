import { UserSchemaValidate } from '../models/user'
import { Request, Response } from 'express'

import CreateUserService from '../services/createUser.service'
import FetchUsersService from '../services/fetchUsers.service'
import UpdateUserService from '../services/updateUser.service'
import DeleteUserService from '../services/deleteUser.service'

class UserController {
    async store(req: Request, res: Response) {
        const data = req.body
        const { error, value } = UserSchemaValidate.validate(data)
        if(error){
            res.json(error.message)
        }else{
            const user = await CreateUserService.handle(data)
            res.status(201).json(user)          
        }
    }

    async index(req: Request, res: Response){
        const list = await FetchUsersService.handle()
        res.json({ users: list })
    }

    async update (req: Request, res: Response){
        const id = req.params.id
        const user = await UpdateUserService.handle(id, req.body)  
        res.json(user)
    }

    async delete(req: Request, res: Response){
        const id = req.params.id
        await DeleteUserService.handle(id)
        res.json('User excluído')
    }

}

export default new UserController()

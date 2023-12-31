import  {Schema, model,} from 'mongoose'
import Joi from 'joi'

export const UserSchemaValidate = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    address: Joi.string().required(),
})

export interface User {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
}

const UserSchema = new Schema<User>({
    name: { 
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true })

 export const UserModel = model<User>('Users', UserSchema)
 
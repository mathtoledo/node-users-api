import express from 'express'
import cors from 'cors'
import { db } from '../config/db.config'
import { router } from '../routes/user.routes'

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.use('/api/users', router)

// app.use('/api/users', (req, res) => {
//     return res.json({users: [{
//         id: "dsadadaksd-dasd",
//         name: "user 1",
//         email: "email@email.com",
//         createdAt: "",
//         updatedAt: "",
//     }]})
// })

db.then(() => {
    app.listen(3000, () => console.log('Server is listening on port 3000'))
})
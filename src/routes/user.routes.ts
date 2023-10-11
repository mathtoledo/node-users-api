import express from "express";
import UserController from '../controllers/user.controller'

export const router = express.Router()

router.post('/', UserController.store)

router.get('/', UserController.index)

router.put('/:id', UserController.update)

router.delete('/:id', UserController.delete)

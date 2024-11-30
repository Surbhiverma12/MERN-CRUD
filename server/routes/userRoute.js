import express from 'express'

import { create, deleteUser, getAllUser, getUserById, updateUser } from '../controller/userController.js'

const route = express.Router();

route.post("/users", create)
route.get("/users", getAllUser)
route.get("/users/:id", getUserById)
route.put("/users/:id", updateUser)
route.delete("/users/:id", deleteUser)

export default route;
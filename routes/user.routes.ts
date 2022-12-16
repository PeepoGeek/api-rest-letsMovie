import express from "express"
import { createUserHandler, verifyUserHandler } from "../controllers/user.controller"
import validateResource from "../middlewares/validationResults"
import { createUserSchema, verifyUserSchema } from "../schema/user.schema"

const route = express.Router()

route.post("/api/users", validateResource(createUserSchema), createUserHandler
)

route.post("/api/users/verify/:id/:verificationCode", validateResource(verifyUserSchema), verifyUserHandler)

export default route
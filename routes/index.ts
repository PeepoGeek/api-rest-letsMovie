import express from "express"
import user from './user.routes'

const route = express.Router()

route.get("/healthcheck", (_, res) => {
    return res.status(200).json({
        success: "ok"
    })
})

route.use(user)

export default route;
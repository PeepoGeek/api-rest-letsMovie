import 'dotenv/config'
import { connectDB } from './database/connectdb'
import config from 'config'

import express from "express";
import log from './utils/logger';
import router from './routes/index'


const PORT = config.get("port")

const app = express()
app.use(express.json())

app.use(router)





app.listen(PORT, () => {
    log.info(`App started at http://localhost:${PORT}`)
    connectDB()
})
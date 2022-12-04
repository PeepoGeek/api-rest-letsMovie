import 'dotenv/config'
import { connectDB } from './database/connectdb'
connectDB()
import express from "express";
import authRouter from './routes/auth.route'




const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use('/api/v1', authRouter)

app.get("/", (req, res) => {
    res.json({ ok: true })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
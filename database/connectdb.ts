import mongoose from "mongoose";
import config from 'config'
import log from "../utils/logger";



export const connectDB = async () => {
    const dburi = config.get<string>('dbUri')

    try {
        const db = await mongoose.connect(dburi)
        log.info("Success to connect to DB")
    } catch (error) {
        console.log("something when wrong with DB" + error)
        process.exit(1)
    }

}



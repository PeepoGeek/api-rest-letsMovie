import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI_DB!)
        console.log("Connection with Database OK!")
    } catch (error) {
        console.log("something when wrong with DB" + error)
    }

}



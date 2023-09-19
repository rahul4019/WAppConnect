import mongoose from "mongoose";
 
export const connectDB = async () => {
    const {connection} = await mongoose.connect(process.env.DB_URL,{
        dbName:'WAppConnect'
    })
            console.log(`DB connection on ${connection.host}`)

}
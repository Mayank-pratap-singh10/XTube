import mongoose from "mongoose";


const connectDB = async () => {
    try{
        const connectionInstance=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongodb is connected!! at ${connectionInstance.connection.host}`);

    }catch(error){
        console.log("Mongodb connection failed")
        process.exit(1)
    }
}
 export default connectDB;
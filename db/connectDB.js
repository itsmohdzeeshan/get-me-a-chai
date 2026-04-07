import mongoose from "mongoose";

const connectDB = async () => {

    if (mongoose.connections[0].readyState) return;

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log("MONGO URI:", process.env.MONGODB_URI);

    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

export default connectDB;
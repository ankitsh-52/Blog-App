import mongoose from "mongoose";

const databaseConnection = async() => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("MongoDB is Connected successfully");
        
    }).catch((e) => {
        console.error(e)
    });
};

export default databaseConnection;
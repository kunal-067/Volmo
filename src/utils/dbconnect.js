import mongoose from "mongoose";
const dbUrl = process.env.DB_URI || "mongodb+srv://valmoDriver1:DB@78/Connector9!?0@cluster0.zgcwg.mongodb.net/valmo1";

export async function connectDb() {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: "admin",
        });
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
        // throw error;
    }
}

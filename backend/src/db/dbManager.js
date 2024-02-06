import mongoose from "mongoose";

export default class MongoDBManager {
    static connectDB(DB_URL) {
        return mongoose.connect(DB_URL);
    }

    static disconnectDB() {
        return mongoose.connection.close();
    }
}
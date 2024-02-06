import Config from "./config.js";
import app from "./server.js";
import MongoDBManager from "./db/dbManager.js";

main();

async function main() {
    let dbConnected = false;
    while(!dbConnected) {
        try {
            await MongoDBManager.connectDB(Config.DB_URL);
            dbConnected = true;
            console.log("Connected to DB Successfully.")
        }
        catch(error) {
            console.log("Failed to connect to DB:", error);
        }
    }

    app.listen(Config.PORT, () => 
        console.log("Server is listening on port", Config.PORT)
    );
}
import dotenv from "dotenv";
dotenv.config();

export default class Config {
    static PORT = process.env.PORT // || 3100;
    static DB_URL = process.env.DB_URL //  || "mongodb://127.0.0.1/bank";
    static BALANCE_MINIMUM_VAL = process.env.BALANCE_MINIMUM_VAL // || 500;
}

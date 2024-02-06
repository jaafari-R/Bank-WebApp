import { Schema, model } from "mongoose";
import MongoDBManager from "../dbManager.js";
import Config from "../../config.js";

const transactionSchema = Schema({
    amount: {type: Number, required: true},
    category: {type: String, required: true},
    vendor: {type: String}
});

const Transaction = model("Transaction", transactionSchema);
export default Transaction;
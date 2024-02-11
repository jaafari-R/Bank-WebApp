import { Schema, model } from "mongoose";

const transactionSchema = Schema({
    amount: {type: Number, required: true},
    category: {type: String, required: true},
    vendor: {type: String},
    date: {type: Date, default: () => new Date()}
});

const Transaction = model("Transaction", transactionSchema);
export default Transaction;

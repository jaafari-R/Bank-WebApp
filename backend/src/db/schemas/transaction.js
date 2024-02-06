import { Schema, model } from "mongoose";

const transactionSchema = Schema({
    amount: {type: Number, required: true},
    category: {type: String, required: true},
    vendor: {type: String}
});

const Transaction = model("Transaction", transactionSchema);
export default Transaction;
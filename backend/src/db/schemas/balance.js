import { Schema, model } from "mongoose";

const balanceSchema = Schema({
    balance: {type: Number, required: true},
});

const Balance = model("Balance", balanceSchema);
export default Balance;

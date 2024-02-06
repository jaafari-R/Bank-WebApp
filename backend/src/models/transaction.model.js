import Transaction from "../db/schemas/transaction.js";
import { NO_TRANSACTIONS_FOUND_ERROR } from "../errorHandlers/transaction.error.js";

export default class TransactionModel {
    static async getAllTransactions() {
        const allTransactions = await Transaction.find({})
        if(allTransactions.length == 0) {
            throw new NO_TRANSACTIONS_FOUND_ERROR();
        }
        return allTransactions;
    }
}
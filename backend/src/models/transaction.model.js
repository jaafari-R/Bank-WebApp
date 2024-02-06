import Transaction from "../db/schemas/transaction.js";
import { NO_TRANSACTIONS_FOUND_ERROR, TRANSACTION_DOES_NOT_EXIST_ERROR } from "../errorHandlers/transaction.error.js";

export default class TransactionModel {
    static async getAllTransactions() {
        const allTransactions = await Transaction.find({});
        if(allTransactions.length === 0) {
            throw new NO_TRANSACTIONS_FOUND_ERROR();
        }
        return allTransactions;
    }

    static async getSpendigsPerCategory() {
        const spendingsPerCategory = await Transaction.aggregate([
            {$group: {
                _id: "$category",
                total: { $sum: "$amount"}
            }}]);
        if(spendingsPerCategory.length === 0) {
            throw new NO_TRANSACTIONS_FOUND_ERROR();
        }
        return spendingsPerCategory;
    }

    static createTransaction({amount, category, vendor}) {
        return Transaction.create({
            amount, category, vendor
        });
    }

    static async deleteTransaction({id}) {
        const result = await Transaction.findByIdAndDelete(id);
        if(result === null) {
            throw new TRANSACTION_DOES_NOT_EXIST_ERROR();
        }
        return result;
    }
}
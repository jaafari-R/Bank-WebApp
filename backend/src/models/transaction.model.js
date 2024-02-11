import Transaction from "../db/schemas/transaction.js";
import { NO_TRANSACTIONS_FOUND_ERROR, TRANSACTION_DOES_NOT_EXIST_ERROR } from "../errorHandlers/transaction.error.js";
import BalanceModel from "./balance.model.js";

export default class TransactionModel {
    static async getAllTransactions(startDate, endDate) {
        const endDateAnd24Hours = endDate ? 
            new Date(new Date(endDate).getTime() + 60 * 60 * 24 * 1000) : endDate;

        let transactions;
        if(startDate && endDate) {
            transactions = await Transaction.find({
                date: {
                    $gte: new Date(startDate),
                    $lt: endDateAnd24Hours
                }
            });
        }
        else if(startDate) {
            transactions = await Transaction.find({
                date: {
                    $gte: new Date(startDate)
                }
            });
        }
        else if(endDate) {
            transactions = await Transaction.find({
                date: {
                    $lt: endDateAnd24Hours
                }
            });
        }
        else {
            transactions = await Transaction.find({});
        }

        if(transactions.length === 0) {
            throw new NO_TRANSACTIONS_FOUND_ERROR();
        }
        return transactions;
    }

    static async getSpendingsPerCategory() {
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

    static createTransaction({amount, category, vendor, date}) {
        return Transaction.create({
            amount, category, vendor, date
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

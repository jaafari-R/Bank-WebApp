import errorHandler from "../errorHandlers/errorHandler.js";
import TransactionModel from "../models/transaction.model.js";

export default class TransactionController {
    static async getAllTransactions(req, res) {
        try {
            const allTransactions = await TransactionModel.getAllTransactions();
            res.json(allTransactions);
        }
        catch(error) {
            errorHandler.handleError(res, error);
        }
    }
}

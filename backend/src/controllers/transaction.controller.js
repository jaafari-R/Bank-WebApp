import errorHandler from "../errorHandlers/errorHandler.js";
import { NO_TRANSACTIONS_FOUND_ERROR } from "../errorHandlers/transaction.error.js";
import TransactionModel from "../models/transaction.model.js";
import TransactionValidator from "../validators/transaction.validator.js";

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

    static async createTransaction(req, res) {
        try {
            TransactionValidator.validateCreate(req.body);
            req.body.category = req.body.category.toLowerCase();

            const newTransaction = await TransactionModel.createTransaction(req.body);
            res.status(201).send(newTransaction);
        }
        catch(error) {
            errorHandler.handleError(res, error);
        }
    }

    static async deleteTransaction(req, res) {
        try {
            TransactionValidator.validateDelete(req.body);
            await TransactionModel.deleteTransaction(req.body);
            res.sendStatus(204);
        }
        catch(error) {
            console.log("HI")
            errorHandler.handleError(res, error);
        }
    }
}

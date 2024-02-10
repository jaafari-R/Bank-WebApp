import errorHandler from "../errorHandlers/errorHandler.js";
import BalanceModel from "../models/balance.model.js";
import TransactionModel from "../models/transaction.model.js";
import BalanceValidator from "../validators/balance.validator.js";
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

    static async getSpendingsPerCategory(req, res) {
        try {
            const allTransactions = await TransactionModel.getSpendingsPerCategory();
            res.json(allTransactions);
        }
        catch(error) {
            errorHandler.handleError(res, error);
        }
    }

    /* don't allow performing a transaction that wouldtake the balance bellow Config.BALANCE_MINIMUM_VAL */
    static async createTransaction(req, res) {
        try {
            TransactionValidator.validateCreate(req.body);
            
            const amount = req.body.amount;
            const balance = await BalanceModel.getBalance();
            BalanceValidator.validateUpdate(balance.balance, amount);

            req.body.category = req.body.category[0].toUpperCase() + 
                req.body.category.slice(1).toLowerCase();

            await BalanceModel.updateBalance({ amount });
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
            errorHandler.handleError(res, error);
        }
    }
}

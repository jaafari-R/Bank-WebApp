import errorHandler from "../errorHandlers/errorHandler.js";
import BalanceModel from "../models/balance.model.js";

export default class BalanceController {
    static async getBalance(req, res) {
        try {
            const balance = await BalanceModel.getBalance();
            res.json(balance);
        }
        catch(error) {
            errorHandler.handleError(res, error);
        }
    }
}
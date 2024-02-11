import axios from "axios";
import { EXTERNAL_API_Config as Config } from "../config";
import { TransactionApiRoutes as ROUTES } from "../config";
import CategorySpending from "./categorySpending";
import Transaction from "./transactions";
import { getErrorMsg } from "../utils/apiManager.utils";


class TransactionApiManager {
    constructor() {
        this.axios = axios.create({
            baseURL: Config.TRANSACTION_API_URL
        });
    }

    async getAllTransactions() {
        try {
            const response = await this.axios.get(ROUTES.GET_ALL_TRANSACTIONS);
            const allTransactions = response.data.map(transaction => new Transaction(transaction));
            return allTransactions;
        }
        catch(error) {
            return getErrorMsg(error);
        }
    }

    async createTransaction(transaction) {
        try {
            const response = await this.axios.post(ROUTES.POST_CREATE_TRANSACTION, transaction);
            const newTransaction = new Transaction(response.data);
            return newTransaction;
        }
        catch(error) {
            return getErrorMsg(error);
        }
    }

    async deleteTransaction(id) {
        try {
            await this.axios.delete(ROUTES.DELETE_TRANSACTION, {data: {id}});
        }
        catch(error) {
            return getErrorMsg(error);
        }
    }

    async getSpendingsPerCategory() {
        try {
            const response = await this.axios.get(ROUTES.GET_SPENDING_PER_CATEGORY);
            const spendingsPerCategory = response.data.map(spc => new CategorySpending(spc));
            return spendingsPerCategory;
        }
        catch(error) {
            return getErrorMsg(error);
        }
    }
}

const transactionApiManager = new TransactionApiManager();
export default transactionApiManager;
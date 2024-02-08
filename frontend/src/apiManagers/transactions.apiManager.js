import axios from "axios";
import Config from "../config";
import CategorySpending from "./categorySpending";
import Transaction from "./transactions";


class TransactionApiManager {
    constructor() {
        console.log(Config.TRANSACTION_API_URL)
        this.axios = axios.create({
            baseURL: Config.TRANSACTION_API_URL
        });
    }

    async getAllTransactions() {
        try {
            const response = await this.axios.get("/");
            const allTransactions = response.data.map(transaction => new Transaction(transaction));
            return allTransactions;
        }
        catch(error) {
            return this.getErrorMsg(error);
        }
    }

    async createTransaction(transaction) {
        try {
            const response = await this.axios.post("/", transaction);
            const newTransaction = new Transaction(response.data);
            return newTransaction;
        }
        catch(error) {
            return this.getErrorMsg(error);
        }
    }

    async deleteTransaction(id) {
        try {
            await this.axios.delete("/", {data: {id}});
        }
        catch(error) {
            return this.getErrorMsg(error);
        }
    }

    async getSpendingsPerCategory() {
        try {
            const response = await this.axios.get("/spendingsPerCategory");
            const spendingsPerCategory = response.data.map(spc => new CategorySpending(spc));
            return spendingsPerCategory;
        }
        catch(error) {
            return this.getErrorMsg(error);
        }
    }

    getErrorMsg(error) {
        if(error.response) {
            return error.response.data;
        }
        return "Failed to connect server!";
    }
}

const transactionApiManager = new TransactionApiManager();
export default transactionApiManager;
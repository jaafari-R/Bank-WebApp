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
            console.log(error);
        }
    }

    async createTransaction(transaction) {
        try {
            const response = await this.axios.post("/", transaction);
            const newTransaction = new Transaction(response.data);
            return newTransaction;
        }
        catch(error) {
            console.log(error);
        }
    }

    async deleteTransaction(id) {
        try {
            const response = await this.axios.delete("/", {data: {id}});
            return response.data;
        }
        catch(error) {
            console.log(error);
        }
    }

    async getSpendingsPerCategory() {
        try {
            const response = await this.axios.get("/spendingsPerCategory");
            const spendingsPerCategory = response.data.map(spc => new CategorySpending(spc));
            return spendingsPerCategory;
        }
        catch(error) {
            console.log(error);
        }
    }
}

const transactionApiManager = new TransactionApiManager();
export default transactionApiManager;
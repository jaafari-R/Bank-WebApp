import axios from "axios";
import Config from "../config";
import Balance from "./balance.js";
import { getErrorMsg } from "../utils/apiManager.utils";

class BalanceApiManager {
    constructor() {
        this.axios = axios.create({
            baseURL: Config.BALANCE_API_URL
        });
    }

    async getBalance() {
        try {
            const response = await this.axios.get("/");
            const balance = new Balance(response.data);
            return balance;
        }
        catch(error) {
            return getErrorMsg(error);
        }
    }

    async updateBalance(amount) {
        try {
            const response = await this.axios.post("/", {amount});
            const updatedBalance = new Balance(response.data);
            return updatedBalance;
        }
        catch(error) {
            return getErrorMsg();
        }
    }
}

const balanceApiManager = new BalanceApiManager();
export default balanceApiManager;
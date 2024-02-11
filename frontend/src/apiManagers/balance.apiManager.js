import axios from "axios";
import { EXTERNAL_API_Config as Config } from "../config";
import { BalanceApiRoutes as ROUTES } from "../config";
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
            const response = await this.axios.get(ROUTES.GET_BALANCE);
            const balance = new Balance(response.data);
            return balance;
        }
        catch(error) {
            return getErrorMsg(error);
        }
    }
}

const balanceApiManager = new BalanceApiManager();
export default balanceApiManager;
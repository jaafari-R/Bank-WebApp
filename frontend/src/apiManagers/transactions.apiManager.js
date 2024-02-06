import axios from "axios";
import Config from "../config";


class TransactionApiManager {
    constructor() {
        this.axios = axios.create(Config.TRANSACTION_API_URL);
    }

    
}
export class EXTERNAL_API_Config {
    static BANK_API_URL = process.env.REACT_APP_BANK_API_URL || "http://127.0.0.1:3100";
    static BALANCE_API_URL = this.BANK_API_URL + "/balance"
    static TRANSACTION_API_URL = this.BANK_API_URL + "/transactions";
}

export class TransactionApiRoutes {
    static GET_ALL_TRANSACTIONS = "/";
    static POST_CREATE_TRANSACTION = "/";
    static DELETE_TRANSACTION = "/";
    static GET_SPENDING_PER_CATEGORY = "/spendingsPerCategory";
}

export class BalanceApiRoutes {
    static GET_BALANCE = "/";
}

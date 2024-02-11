import Config from "../config.js";
import { BALANCE_CRITICAL_VALUE_ERROR } from "../errorHandlers/balance.error.js";

export default class BalanceValidator {
    static validateUpdate(balance, amount) {
        if(amount < 0 && balance + amount < Config.BALANCE_MINIMUM_VAL) {
            throw new BALANCE_CRITICAL_VALUE_ERROR();
        }
    }
}

import { MISSING_DATA_ERROR, INVALID_AMOUNT_ERROR } from "../errorHandlers/transaction.error.js";

export default class TransactionValidator {
    static validateCreate({amount, category, vendor}) {
        if(amount === undefined || !category || !vendor) {
            throw new MISSING_DATA_ERROR();
        }
        if(amount <= 0) {
            throw new INVALID_AMOUNT_ERROR();
        }
    }
}
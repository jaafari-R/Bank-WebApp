import { MISSING_DATA_ERROR, INVALID_AMOUNT_ERROR, INVALID_TRANSACTION_ID_ERROR, INVALID_DATE_ERROR, INVALIDE_DATE_FORMAT_ERROR } from "../errorHandlers/transaction.error.js";

export default class TransactionValidator {
    static validateCreate({amount, category, vendor, date}) {
        if(amount === undefined || !category || !vendor) {
            throw new MISSING_DATA_ERROR();
        }
        
        if(amount == 0) {
            throw new INVALID_AMOUNT_ERROR();
        }

        const dateObj = new Date(date);
        if(dateObj > new Date()) {
            throw new INVALID_DATE_ERROR();
        }

        if(date) {
            TransactionValidator.validateDate(date);
        }
    }
    
    static validateDelete({id}) {
        if(!id) {
            throw new INVALID_TRANSACTION_ID_ERROR();
        }
    }
    
    static validateDate(date) {
        const dateObj = new Date(date);
        if(isNaN(dateObj)) {
            throw new INVALIDE_DATE_FORMAT_ERROR();
        }

    }
}

export class NO_TRANSACTIONS_FOUND_ERROR extends Error {
    static msg = "No Transactions Found!";
    static statusCode = 404;
}

export class MISSING_DATA_ERROR extends Error {
    static msg = "Some input data is missing!";
    static statusCode = 400;
}

export class INVALID_AMOUNT_ERROR extends Error {
    static msg = "An invalid amount was provided!";
    static statusCode = 400;
}

export class INVALID_TRANSACTION_ID_ERROR extends Error {
    static msg = "Invalid Transaction ID!";
    static statusCode = 400;
}

export class TRANSACTION_DOES_NOT_EXIST_ERROR extends Error {
    static msg = "Transaction does not exist!";
    static statusCode = 404;
}

export class INVALID_DATE_ERROR extends Error {
    static msg = "Invalid date!";
    static statusCode = 400;
}

export class INVALIDE_DATE_FORMAT_ERROR extends Error {
    static msg = "Invalid Date Format";
    static statusCode = 400;
}

export default {
    NO_TRANSACTIONS_FOUND_ERROR,
    MISSING_DATA_ERROR,
    INVALID_AMOUNT_ERROR,
    INVALID_TRANSACTION_ID_ERROR,
    TRANSACTION_DOES_NOT_EXIST_ERROR,
    INVALID_DATE_ERROR,
    INVALIDE_DATE_FORMAT_ERROR
}

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

export default {
    NO_TRANSACTIONS_FOUND_ERROR,
    MISSING_DATA_ERROR,
    INVALID_AMOUNT_ERROR,
}
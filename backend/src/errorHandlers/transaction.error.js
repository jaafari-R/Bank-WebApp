export class NO_TRANSACTIONS_FOUND_ERROR extends Error {
    static msg = "No Transactions Found!";
    static statusCode = 404;
}

export default {
    NO_TRANSACTIONS_FOUND_ERROR
}
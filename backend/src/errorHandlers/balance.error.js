export class BALANCE_CRITICAL_VALUE_ERROR extends Error {
    static msg = "Can't perform transaction, insufficient funds!";
    static statusCode = 400; // TODO - better code?
}

export default {
    BALANCE_CRITICAL_VALUE_ERROR
}
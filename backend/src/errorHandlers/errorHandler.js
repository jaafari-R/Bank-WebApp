import transactionErrors from "./transaction.error.js";

class ErrorHandler {
    constructor() {
        this.errors = {
            ...transactionErrors
        };
    }

    handleError(res, error) {
        console.log("Error:", error);

        const errorType = error.constructor.name;
        if(this.errors[errorType]) {
            return res
                .status(this.errors[errorType].statusCode)
                .send(this.errors[errorType].msg);
        }
        res.status(500).send("Server Error!")
    }
}

const errorHandler = new ErrorHandler();
export default errorHandler;
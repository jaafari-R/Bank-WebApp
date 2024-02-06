export default class Transaction {
    constructor({ _id, amount, category, vendor }) {
        this.id = _id || null;
        this.amount = amount || "";
        this.category = category || "";
        this.vendor = vendor || "";
    }
}
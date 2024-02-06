export default class Transaction {
    constructor({ _id, amount, category, vendor }) {
        this.id = _id;
        this.amount = amount;
        this.category = category;
        this.vendor = vendor;
    }
}
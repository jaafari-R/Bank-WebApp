import Balance from "../db/schemas/balance.js";

export default class BalanceModel {
    static async getBalance() {
        const balance = await Balance.findOne({});
        if(balance.length === 0) {
            const newBalance = await Balance.create({balance: 3000});
            return newBalance;
        }
        return balance;
    }

    static updateBalance({ amount }) {
        return Balance.findOneAndUpdate({}, {$inc: {balance: amount}}, {new: true});
    }
}

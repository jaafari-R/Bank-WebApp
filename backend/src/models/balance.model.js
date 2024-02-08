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

    static async updateBalance(amount) {
        const balance = await Balance.findOne({});
        const updatedBalance = await Balance.findOneAndUpdate({}, {$set: {balance: balance.balance + amount}}, {new: true});
        return updatedBalance;
    }
}

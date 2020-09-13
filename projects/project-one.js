class Transaction {
    constructor(date, amount) {
        this.date = date;
        this.amount = amount;
    }
}

function TransactionBuilder() {
    function addDays(date, days) {
        const copy = new Date(Number(date));
        copy.setDate(date.getDate() + days);
        return copy;
    }
    
    let date = new Date(new Date().getFullYear() + 1, 0, 0, 0, 0, 0, 0);

    return function () {
        let amount = parseFloat((Math.random() * 100 + Math.random()).toFixed(2));
        let transaction = new Transaction(date, amount);
        date = addDays(date, 1);
        return transaction;
    }
}

let transactionBuilder = TransactionBuilder();

let transactions = [];

for (let i = 0; i < 365; i++) {
    transactions.push(transactionBuilder());
}

let totalAmountSum = transactions.reduce((accumulator, transaction) => accumulator + transaction.amount, 0).toFixed(2);

console.log(transactions);
console.log(totalAmountSum);
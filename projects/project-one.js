class Transaction {
    constructor(date, amount) {
        this.date = date;
        this.amount = amount;
    }
}

let transactions = [];

for (let i = 0; i < 100; i++) {
    let dollar = Math.random() * 100;
    let cents = Math.random();
    let amount = (dollar + cents).toFixed(2);

    let transaction = new Transaction("Test", amount);
    
    transactions.push(transaction);
}

console.log(transactions);
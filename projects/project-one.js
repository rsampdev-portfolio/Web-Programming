class Transaction {
    constructor(date, amount, reason) {
        this.date = date;
        this.amount = amount;
        this.reason = reason;
    }
}

class MonthlyReport {
    constructor(name, transactionAmountSums) {
        this.name = name;
        this.transactionAmountSums = transactionAmountSums;
    }
}

class Reason {
    constructor(reason, count = 0) {
        this.reason = reason;
        this.count = count;
    }

    increment() {
        count += 1;
    }
}

function TransactionBuilder() {
    function addDays(date, days) {
        const copy = new Date(Number(date));
        copy.setDate(date.getDate() + days);
        return copy;
    }
    
    let date = new Date(new Date().getFullYear() + 1, 0, 0, 0, 0, 0, 0);
    const reasons = ["order out", "grocery", "home needs", "rent/mortgage", "savings"];

    return function () {
        let amount = parseFloat((Math.random() * 100 + Math.random()).toFixed(2));
        let transaction = new Transaction(date, amount, reasons[Math.floor(Math.random() * reasons.length)]);
        date = addDays(date, 1);
        return transaction;
    }
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let transactions = [];
let monthlyReports = []
let transactionBuilder = TransactionBuilder();

for (let i = 0; i < 365; i++) {
    transactions.push(transactionBuilder());
}

for (let month = 0; month < 12; month++) {
    let monthlyTransactions = transactions.filter(transaction => transaction.date.getMonth() == month);

    for (let i = 0; i < monthlyTransactions.length; i++) {
        console.log(monthlyTransactions[i].reason);
    }

    let totalMonthlyAmountSum = monthlyTransactions.reduce((amountSum, transaction) => amountSum + transaction.amount, 0).toFixed(2);
    monthlyReports.push(new MonthlyReport(monthNames[month], totalMonthlyAmountSum));
}

console.log(monthlyReports);
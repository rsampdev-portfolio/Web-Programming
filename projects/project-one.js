class Transaction {
    constructor(date, amount) {
        this.date = date;
        this.amount = amount;
    }
}

class MonthlyReport {
    constructor(name, transactionAmountSums) {
        this.name = name;
        this.transactionAmountSums = transactionAmountSums;
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
    let totalMonthlyAmountSum = monthlyTransactions.reduce((amountSum, transaction) => amountSum + transaction.amount, 0).toFixed(2);
    monthlyReports.push(new MonthlyReport(monthNames[month], totalMonthlyAmountSum));
}

console.log(monthlyReports);
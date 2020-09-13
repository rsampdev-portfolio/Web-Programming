class Transaction {
    constructor(date, amount, reason) {
        this.date = date;
        this.amount = amount;
        this.reason = reason;
    }
}

class MonthlyReport {
    constructor(month, transactionAmountSum, transactionReasonPercentages) {
        this.month = month;
        this.transactionAmountSum = transactionAmountSum;
        this.transactionReasonPercentages = transactionReasonPercentages;
    }
}

class Reason {
    constructor(reason, percentage) {
        this.reason = reason;
        this.percentage = percentage;
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
    let length = monthlyTransactions.length;
    let reasonCounts = new Map();
    let reasonPercentages = [];
    
    for (let i = 0; i < length; i++) {
        let reason = monthlyTransactions[i].reason;

        if (reasonCounts.has(reason)) {
            reasonCounts.set(reason, reasonCounts.get(reason) + 1);
        } else {
            reasonCounts.set(reason, 1);
        }
    }

    reasonCounts.forEach( (count, reason) => {
        reasonPercentages.push(new Reason(reason, (count / length).toFixed(2)));
    });

    let totalMonthlyAmountSum = monthlyTransactions.reduce((amountSum, transaction) => amountSum + transaction.amount, 0).toFixed(2);
    monthlyReports.push(new MonthlyReport(monthNames[month], totalMonthlyAmountSum, reasonPercentages));
}

console.log(JSON.stringify(monthlyReports, null, 2));
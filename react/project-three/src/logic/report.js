class Transaction {
    constructor(date, amount, reason) {
        this.date = date;
        this.amount = amount;
        this.reason = reason;
    }
}
class ReasonPercentage {
    constructor(reason, percentage) {
        this.reason = reason;
        this.percentage = percentage;
    }
}

class MonthlyReport {
    constructor(month, transactionAmountSum, transactionReasonPercentages) {
        this.month = month;
        this.transactionAmountSum = transactionAmountSum;
        this.transactionReasonPercentages = transactionReasonPercentages;
    }
}

function createReasonCache(originalAmount) {
    let reasonCache = new Map();
    
    return {
        cache: reason => {
            if (reasonCache.has(reason)) {
                reasonCache.set(reason, reasonCache.get(reason) + 1);
            } else {
                reasonCache.set(reason, 1);
            }
        },
        reduce: () => {
            let values = [];

            reasonCache.forEach((count, reason) => {
                values.push(new ReasonPercentage(reason, (count / originalAmount).toFixed(2)));
            });

            return values;
        }
    }
}

function calculateReasonPercentages(monthlyTransactions) {
    let cache = createReasonCache(monthlyTransactions.length);

    for (let i = 0; i < monthlyTransactions.length; i++) {
        cache.cache(monthlyTransactions[i].reason);
    }

    return cache.reduce();
}

async function retrieveTransactionReportData() {
    let response = await fetch("https://api.jsonbin.io/b/5f7e443965b18913fc5c5457/6", {
        headers: {
            "Content-Type": "application/json",
            "secret-key": "$2b$10$EtZCBPnTjkcf2RsD4IpPe../wa5udw2LDI0zRzlLHn9Sl/yaEtrty"
        }
    });

    let json = await response.json();
    return json["rawTransactionsData"];
}

export const getReportCache = () => {
    return retrieveTransactionReportData();
}

export const parseOutMonthlyTransactionsReport = rawTransactionsData => {
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const transactions = rawTransactionsData.map(transaction => {
        return new Transaction(new Date(transaction.date), transaction.amount, transaction.reason);
    });

    let monthlyReports = [];

    for (let month = 0; month < months.length; month++) {
        let monthlyTransactions = transactions.filter(transaction => transaction.date.getMonth() === month);
        let reasonPercentages = calculateReasonPercentages(monthlyTransactions);
        let monthlyAmmountSum = monthlyTransactions.reduce((sum, transaction) => sum + transaction.amount, 0).toFixed(2);
        monthlyReports.push(new MonthlyReport(months[month], monthlyAmmountSum, reasonPercentages));
    }

    return { "months": monthlyReports };
}
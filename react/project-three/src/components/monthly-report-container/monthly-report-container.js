import React from "react";

import "../monthly-report-container/monthly-report-container.css";

function MonthlyReportContainer(props) {
    function helper(month, number) {
        return `${month.transactionReasonPercentages[number].reason} `
        + `- ${month.transactionReasonPercentages[number].percentage}%`
        + ` - $${(month.transactionAmountSum * month.transactionReasonPercentages[number].percentage).toFixed(2)}`
    }

    let month = props.month;

    if (month === null || month === undefined) {
        return null;
    }

    month.transactionReasonPercentages.sort((a, b) => b.percentage - a.percentage);

    return (
        <div>
            <h3 id="Month-Header">{month.month}</h3>

            <h4>{`Total Monthly Transactions: $${month.transactionAmountSum}`}</h4>

            <h4>{"Transaction Reason Percentages:"}</h4>

            <p>{helper(month, 0)}</p>

            <p>{helper(month, 1)}</p>

            <p>{helper(month, 2)}</p>

            <p>{helper(month, 3)}</p>

            <p>{helper(month, 4)}</p>
        </div>
    );
}

export default MonthlyReportContainer;
import React, { Component } from "react";

class MonthlyReportContainer extends Component {
    helper(month, number) {
        return `${month.transactionReasonPercentages[number].reason} - ${month.transactionReasonPercentages[number].percentage}%`
        + ` - $${(month.transactionAmountSum * month.transactionReasonPercentages[number].percentage).toFixed(2)}`
    }
    render() {
        let month = this.props.month;

        if (month === null || month === undefined) {
            return null;
        }

        month.transactionReasonPercentages.sort((a, b) => b.percentage - a.percentage);
        
        return (
            <div>
                <h3>{month.month}</h3>

                <h4>{`Total Monthly Transactions - $${month.transactionAmountSum}`}</h4>

                <h4>{"Transaction Reason Percentages:"}</h4>

                <p>{this.helper(month, 0)}</p>

                <p>{this.helper(month, 1)}</p>

                <p>{this.helper(month, 2)}</p>

                <p>{this.helper(month, 3)}</p>

                <p>{this.helper(month, 4)}</p>
            </div>
        );
    }
}

export default MonthlyReportContainer;
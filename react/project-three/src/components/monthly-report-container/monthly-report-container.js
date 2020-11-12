import React, { Component } from "react";

class MonthlyReportContainer extends Component {
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

                <p>
                    {`${month.transactionReasonPercentages[0].reason} - ${month.transactionReasonPercentages[0].percentage}%`}
                    {` - $${(month.transactionAmountSum * month.transactionReasonPercentages[0].percentage).toFixed(2)}`}
                </p>

                <p>
                    {`${month.transactionReasonPercentages[1].reason} - ${month.transactionReasonPercentages[1].percentage}%`}
                    {` - $${(month.transactionAmountSum * month.transactionReasonPercentages[1].percentage).toFixed(2)}`}
                </p>

                <p>
                    {`${month.transactionReasonPercentages[2].reason} - ${month.transactionReasonPercentages[2].percentage}%`}
                    {` - $${(month.transactionAmountSum * month.transactionReasonPercentages[2].percentage).toFixed(2)}`}
                </p>

                <p>
                    {`${month.transactionReasonPercentages[3].reason} - ${month.transactionReasonPercentages[3].percentage}%`}
                    {` - $${(month.transactionAmountSum * month.transactionReasonPercentages[3].percentage).toFixed(2)}`}
                </p>

                <p>
                    {`${month.transactionReasonPercentages[4].reason} - ${month.transactionReasonPercentages[4].percentage}%`}
                    {` - $${(month.transactionAmountSum * month.transactionReasonPercentages[4].percentage).toFixed(2)}`}
                </p>

            </div>
        );
    }
}

export default MonthlyReportContainer;
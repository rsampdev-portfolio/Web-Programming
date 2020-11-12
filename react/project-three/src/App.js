import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";

import './App.css';

import {
  getReportCache,
  parseOutMonthlyTransactionsReport
} from "./logic/report.js";

import MonthlyReportContainer from "./components/monthly-report-container/monthly-report-container.js";

function App() {
  const urls = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december", ""
  ];

  let [data, updateData] = React.useState(null);

  getReportCache().then(result => {
    if (data === null || data === undefined) {
      updateData(parseOutMonthlyTransactionsReport(result).months);
    }
  }).catch(err => console.log(err));

  function linker(url, linkName) {
    return <b><Link to={`/${url}`}>{`${linkName}`}</Link></b>;
  }

  function allMonths(data, urls) {
    let children = [];

    for (let i = 0; i < 12; i++) {
      children.push(<MonthlyReportContainer key={`MonthlyReportContainer-${i}`} month={data != null ? data[i] : null} />);
    }

    return React.createElement("div", null, children);
  }

  function allRoutes(data, urls) {
    let children = [];

    for (let i = 0; i < 13; i++) {
      if (i === 12) {
        children.push(allMonths(data));
      }

      children.push(
        React.createElement("Route", { "path": `/${urls[i]}` },
          <MonthlyReportContainer month={data != null ? data[i] : null} />
        ));
    }

    return children;
  }

  return (
    <>
      <div id="Content-Container">
        <Router>
          <nav>
            <ul>
              <li>{linker("january", "January")}</li>
              <li>{linker("february", "February")}</li>
              <li>{linker("march", "March")}</li>
              <li>{linker("april", "April")}</li>
              <li>{linker("may", "May")}</li>
              <li>{linker("june", "June")}</li>
              <li>{linker("july", "July")}</li>
            </ul>
            <ul>
              <li>{linker("august", "August")}</li>
              <li>{linker("september", "September")}</li>
              <li>{linker("october", "October")}</li>
              <li>{linker("november", "November")}</li>
              <li>{linker("december", "December")}</li>
              <li>{linker("", "All Months")}</li>
            </ul>
          </nav>

          <div id="Content-Container">
            <h2>Monthly Transaction Report Viewer</h2>

            <p>There is an array of sample account transactions and their reasons stored in a JSONbin.</p>

            <p>This program compiles the yearly report and each monthly report from those transactions.</p>

            <Switch>
              {allRoutes(data, urls)}
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
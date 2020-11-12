import React, {
  Component
} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import {
  getReportCache,
  parseOutMonthlyTransactionsReport
} from "./logic/report.js";

import MonthlyReportContainer from "./components/monthly-report-container/monthly-report-container.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    if (this.state.data == null) {
      let data = await getReportCache();
      let months = parseOutMonthlyTransactionsReport(data).months;

      this.setState({
        data: months
      });
    }
  }

  linker(url, text) {
    return <b><Link to={`/${url}`}>{`${text}`}</Link></b>;
  }

  render() {
    return (
      <>
        <div id="Content-Container">
          <Router>
            <span>
              <nav>
                <ul>
                  <li>{this.linker("january", "January")}</li>
                  <li>{this.linker("february", "February")}</li>
                  <li>{this.linker("march", "March")}</li>
                  <li>{this.linker("april", "April")}</li>
                  <li>{this.linker("may", "May")}</li>
                  <li>{this.linker("june", "June")}</li>
                  <li>{this.linker("july", "July")}</li>
                </ul>
                <ul>
                  <li>{this.linker("august", "August")}</li>
                  <li>{this.linker("september", "September")}</li>
                  <li>{this.linker("october", "October")}</li>
                  <li>{this.linker("november", "November")}</li>
                  <li>{this.linker("december", "December")}</li>
                  <li>{this.linker("", "All Months")}</li>
                </ul>
              </nav>
            </span>

            <div id="Content-Container">
              <Switch>
                <Route exact path="/">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[0] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[1] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[2] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[3] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[4] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[5] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[6] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[7] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[8] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[9] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[10] : null} />
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[11] : null} />
                </Route>
                <Route exact path="/january">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[0] : null} />
                </Route>
                <Route exact path="/february">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[1] : null} />
                </Route>
                <Route exact path="/march">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[2] : null} />
                </Route>
                <Route exact path="/april">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[3] : null} />
                </Route>
                <Route exact path="/may">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[4] : null} />
                </Route>
                <Route exact path="/june">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[5] : null} />
                </Route>
                <Route exact path="/july">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[6] : null} />
                </Route>
                <Route exact path="/august">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[7] : null} />
                </Route>
                <Route exact path="/september">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[8] : null} />
                </Route>
                <Route exact path="/october">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[9] : null} />
                </Route>
                <Route exact path="/november">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[10] : null} />
                </Route>
                <Route exact path="/december">
                  <MonthlyReportContainer month={this.state.data != null ? this.state.data[11] : null} />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
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

import { getReportCache,
         parseOutMonthlyTransactionsReport } from "./logic/report.js";

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

  render() {
    return (
      <>
        <Router>
          <span>
            <nav>
              <ul>
                <li><Link to="/all">All Months</Link></li>
              </ul>
              <ul>
                <li><Link to="/january">January</Link></li>
                <li><Link to="/february">February</Link></li>
                <li><Link to="/march">March</Link></li>
                <li><Link to="/april">April</Link></li>
                <li><Link to="/may">May</Link></li>
                <li><Link to="/june">June</Link></li>
                <li><Link to="/july">July</Link></li>
                <li><Link to="/august">August</Link></li>
                <li><Link to="/september">September</Link></li>
                <li><Link to="/october">October</Link></li>
                <li><Link to="/november">November</Link></li>
                <li><Link to="/december">December</Link></li>
              </ul>
            </nav>
          </span>
          
          <Switch>
            <Route exact path={["/", "/all"]}>
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[0] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[1] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[2] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[3] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[4] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[5] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[6] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[7] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[8] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[9] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[10] : null} />
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[11] : null} />
            </Route>
            <Route exact path="/january">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[0] : null} />
            </Route>
            <Route exact path="/february">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[1] : null} />
            </Route>
            <Route exact path="/march">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[2] : null} />
            </Route>
            <Route exact path="/april">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[3] : null} />
            </Route>
            <Route exact path="/may">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[4] : null} />
            </Route>
            <Route exact path="/june">
             <MonthlyReportContainer month= {this.state.data != null ? this.state.data[5] : null} />
            </Route>
            <Route exact path="/july">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[6] : null} />
            </Route>
            <Route exact path="/august">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[7] : null} />
            </Route>
            <Route exact path="/september">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[8] : null} />
            </Route>
            <Route exact path="/october">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[9] : null} />
            </Route>
            <Route exact path="/november">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[10] : null} />
            </Route>
            <Route exact path="/december">
              <MonthlyReportContainer month= {this.state.data != null ? this.state.data[11] : null} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
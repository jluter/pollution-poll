import React, { Component } from "react";
// import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";
import PollutionPollPage from "./Pages/PollutionPollPage/PollutionPollPage";
import './App.scss';

class App extends Component {


  // componentDidMount() {
  //   axios
  //         .post(
  //           "https://beta3.api.climatiq.io/estimate",
  //           {
  //             emission_factor: {
  //               uuid: "199447df-a5a5-462f-8dcd-dcada8c7997b",
  //             },
  //             parameters: {
  //               money: this.state.money,
  //               money_unit: "usd",
  //             },
  //           },
  //           {
  //             headers: { Authorization: "Bearer FJE2K0K7BEMEYRPAPGEW2EHY53PM" },
  //           }
  //         )
  //         .then((response) => {
  //           console.log(response.data);
  //         })
  //         .catch((error) => console.log(error)) 
  // }

  handleLogoClick = () => {
    this.props.history.push("/")
  }

  render() {
    return (
      <Router>
        <Header handleLogoClick={this.handleLogoClick}/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/pollutionpoll" component={PollutionPollPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

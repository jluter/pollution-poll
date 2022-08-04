import React, { Component } from "react";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from "./Components/Header/Header";
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



  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
// import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
// import Header from "./Components/Header/Header";
import PollutionPollPage from "./Pages/PollutionPollPage/PollutionPollPage";
import './App.scss';

class App extends Component {


  handleLogoClick = () => {

    this.props.history.push("/")
  }

  render() {

    return (
      <Router>
        {/* <Header handleLogoClick={this.handleLogoClick}/> */}
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/pollutionpoll" component={PollutionPollPage}/> 
        </Switch>
      </Router>
    );
  }
}

export default App;

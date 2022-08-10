import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import PollutionPollPage from "./Pages/PollutionPollPage/PollutionPollPage";
import './App.scss';
import Footer from './Components/Footer/Footer';

class App extends Component {


  handleLogoClick = () => {

    this.props.history.push("/")
  }

  render() {

    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/pollutionpoll" component={PollutionPollPage}/> 
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;

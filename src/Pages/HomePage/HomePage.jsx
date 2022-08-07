import React, { Component } from "react";
// import axios from "axios";
import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import {BiPoll}  from 'react-icons/bi';


class HomePage extends Component {
  
  handleLogoClick = () => {

    this.props.history.push("/")
  }
  render() {
    return (
      <>
      <Header handleLogoClick={this.handleLogoClick}/>
      <main className="home-page">
        <h1>Pollution Poll <BiPoll /></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque impedit possimus nostrum voluptatibus quisquam! Incidunt autem corrupti in, debitis impedit itaque quibusdam accusamus odit reprehenderit repellendus error ex neque fuga.</p>
      </main>
      </>
    );
  }
}

export default HomePage;

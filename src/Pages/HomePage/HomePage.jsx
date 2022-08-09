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


        <article>
          <h2>What is it?</h2>
        </article>
        <article>
          <h2>How does it work?</h2>
        </article>
        <article>
          <h2>Why make it?</h2>
        </article>


      </main>
      </>
    );
  }
}

export default HomePage;

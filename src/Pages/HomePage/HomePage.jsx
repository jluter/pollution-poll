import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.scss";
import Header from "../../Components/Header/Header";
import {BiPoll}  from 'react-icons/bi';
import WindMill from '../../assets/images/offshore-windfarm.jpg';


class HomePage extends Component {
  
  handleLogoClick = () => {

    this.props.history.push("/")
  }
  render() {
    return (
      <>
      <Header handleLogoClick={this.handleLogoClick}/>
      <main className="home-page">
        <section className="home-page__hero">
          <img className="home-page__bg" src={WindMill} alt="Background Windmill"/>
      <h1 className="home-page__hero-title">Pollution Poll <BiPoll /></h1>
      </section>
      <section className="app-description-wrapper">
        <article className="app-description">
          <h2>What is it?</h2>
          <p>Pollution Poll is a website developed using React.js as the primary framework. It's goal is to estimate Carbon Dioxide Emissions (CO2e) of a U.S. citizen. This estimate is meant to represent a portion of the user's carbon footprint and compare it to same portion of an average U.S. citizen's footprint.</p>
        </article>
        <article className="app-description">
          <h2>How does it work?</h2>
          <div className="how-paragraph">You will need a few pieces of information to fill out the form: 
            <ul>
              <li>Your source of electricity. (Coal, wind, nuclear, etc...)</li>
              <li>Your monthly electric bill.</li>
              <li>Your monthly water bill.</li>
              <li>The average gas price per gallon in your area.</li>
              <li>The amount you spend on gas monthly.</li>
            </ul>
            Navigate to the <NavLink to="/pollutionpoll">Pollution Poll</NavLink> page. Once there, input the required form fields. Pollution Poll will use your input to gather information from the <a href="https://www.climatiq.io/" target="_blank" rel="noopener noreferrer">Climatiq API</a>. This will be used to display your CO2 emissions. Emission estimates will be represented in kilograms of CO2 per U.S. Dollar (USD). </div>
        </article>
        <article className="app-description">
          <h2>Why make it?</h2>
          <p>The purpose is to bring awareness to a portion of a user's carbon footprint. By bringing notice to these activities there will hopefully be greater potential to change daily habits, potentially leading to a reduction in CO2 emissions of these activities.<br/>
          <span>Please Note: </span>all outputs are estimations only. They may not be entirely accurate of actual CO2 emissions, as some estimates may be based on household output regardless of amount of individuals per household. </p>
        </article>
      </section>


      </main>
      </>
    );
  }
}

export default HomePage;

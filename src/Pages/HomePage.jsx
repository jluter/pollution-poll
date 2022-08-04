import React, { Component } from 'react';
import axios from "axios";
import MoneyInputForm from '../Components/MoneyInputForm/MoneyInputForm';

class HomePage extends Component {

    state = {
        money: null
    }

    handleFormSubmit = (moneyInput) => {

        this.setState({
            money: moneyInput
        })
        
        console.log("Form Submit:" + moneyInput)
    }
    
    componentDidUpdate() {
        this.state.money 
        ? axios
          .post(
            "https://beta3.api.climatiq.io/estimate",
            {
              emission_factor: {
                uuid: "199447df-a5a5-462f-8dcd-dcada8c7997b",
              },
              parameters: {
                money: this.state.money,
                money_unit: "usd",
              },
            },
            {
              headers: { Authorization: "Bearer FJE2K0K7BEMEYRPAPGEW2EHY53PM" },
            }
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error)) 
        : console.log("Loading...");
    }

    render() {
        return (
            <div>
                <h1>Pollution Poll</h1>
                <MoneyInputForm 
                    handleFormSubmit={this.handleFormSubmit}
                />
            </div>
        );
    }
}


export default HomePage;
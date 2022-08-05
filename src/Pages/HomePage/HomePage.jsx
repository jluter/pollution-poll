import React, { Component } from "react";
import axios from "axios";
import "./HomePage.scss";
import MoneyInputForm from "../../Components/MoneyInputForm/MoneyInputForm";

class HomePage extends Component {
  state = {
    money: null,
    energySourceId: null,
    waterBill: null,
    test: null
  };

  axiosPostRequest = (emissionFactorId, moneyInput) => {
    axios
        .post(
          "https://beta3.api.climatiq.io/estimate",
            {
              emission_factor: {
                uuid: emissionFactorId,
              },
              parameters: {
                money: moneyInput,
                money_unit: "usd",
              }
            },
          {
            headers: { Authorization: "Bearer FJE2K0K7BEMEYRPAPGEW2EHY53PM" },
          })
          .then((response) => {
            console.log(response.data);
            this.setState({
              test: response.data.co2e
            })
          })
          .catch((error) => console.log(error))
  }

  handleFormSubmit = (moneyInput, energySource, waterBill) => {
    
    axios
    .get("http://localhost:4444/activity")
    .then((response) => {
      const energyActivity = response.data.find(activity => activity.activityName === "energy")

      const activity = energyActivity.activityId.find(activity => activity.name === energySource)

      
      this.setState({
        money: moneyInput,
        energySourceId: activity.id,
        waterBill: waterBill,
      });
    })
  };

  componentDidUpdate(prevProps) {

    console.log(prevProps);
    // if(prevProps.match !== this.props.match) {
      this.state.test
      ? console.log("Loaded!")
      : this.axiosPostRequest(this.state.energySourceId, this.state.money)
    // }


      // this.state.money
      // ? axios
      //   .post(
      //     "https://beta3.api.climatiq.io/estimate",
      //       {
      //         emission_factor: {
      //           uuid: this.state.energySourceId,
      //         },
      //         parameters: {
      //           money: this.state.money,
      //           money_unit: "usd",
      //         }
      //       },
      //     {
      //       headers: { Authorization: "Bearer FJE2K0K7BEMEYRPAPGEW2EHY53PM" },
      //     }
      //   )
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => console.log(error))
      // : console.log("Loading...");
  }

  render() {
    return (
      <main className="home-page">
        <h1>Pollution Poll</h1>
        <MoneyInputForm 
          handleFormSubmit={this.handleFormSubmit} 
          test={this.state.test}
        />
      </main>
    );
  }
}

export default HomePage;

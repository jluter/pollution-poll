import React, { Component } from 'react';
import axios from "axios";
import "./PollutionPollPage.scss";
import Header from "../../Components/Header/Header";
import MoneyInputForm from "../../Components/MoneyInputForm/MoneyInputForm";
import EmissionResults from '../../Components/EmissionResults/EmissionResults';

class PollutionPollPage extends Component {
    state = {
        energyBill: null,
        energySourceId: null,
        waterBill: null,
        emissionArray: null,
        sumEmissions: null,
        gallonsBought: null,
      };
    
    
      handleFormSubmit = (energySource, estimationBillArray) => {
        
        axios
        .get("http://localhost:4444/activity")
        .then((response) => {
          const energyActivity = response.data.find(activity => activity.activityName === "energy")
    
    
          const activity = energyActivity.activityId.find(activity => activity.name === energySource)
          console.log(estimationBillArray)

          const gallonsBought = (estimationBillArray[3].estimationValue)/(estimationBillArray[2].estimationValue)
          this.setState({
            energyBill: estimationBillArray[0].estimationValue,
            energySourceId: activity.id,
            waterBill: estimationBillArray[1].estimationValue,
            gallonsBought: gallonsBought
          });
        })
        .catch(error => console.log(error))
      };

    
      componentDidUpdate(prevProps, prevState) {
        if (prevState.energyBill !== this.state.energyBill) {
        this.state.energySourceId
          ? axios
            .post(
              "https://beta3.api.climatiq.io/batch",
                [{
                  emission_factor: {
                    uuid: this.state.energySourceId,
                  },
                  parameters: {
                    money: this.state.energyBill,
                    money_unit: "usd",
                  }
                },
                {
                  emission_factor: {
                    uuid: "1eed671c-7e3d-44e2-85f5-57dc86372cea",
                  },
                  parameters: {
                    money: this.state.waterBill, 
                    money_unit: "usd",
                  }
                },
                {
                  emission_factor: {
                    uuid: "3b0b346e-27b0-4e11-97fb-a4b55c7f6f1f",
                  },
                  parameters: {
                    volume: this.state.gallonsBought, 
                    volume_unit: "gallon_us",
                  }
                },
              ],
              {
                headers: { Authorization: "Bearer FJE2K0K7BEMEYRPAPGEW2EHY53PM" },
              }
            )
            .then((response) => {
    
              const cleanedData = response.data.results.map(object => {
                return (
                  object.co2e
                )
              })
              let sum = 0;
              cleanedData.forEach((number) => {
                sum += number
              })
    
              console.log(response.data, sum);
              this.setState({
                emissionArray: response.data,
                sumEmissions: sum
              })
            })
            .catch((error) => console.log(error))
          : console.log("Awaiting Input...");
        } 
      }

      handleLogoClick = () => {
        this.props.history.push("/")
      }
      render() {
        return (
          <>
          <Header handleLogoClick={this.handleLogoClick}/>
          <main className="pollution-page">
            <h1 className='pollution-page__title'>Pollution Poll</h1>
            {!this.state.sumEmissions && <MoneyInputForm 
              handleFormSubmit={this.handleFormSubmit}
              emissions={this.state.emissionArray} 
              state={this.state}
            />}
            {this.state.sumEmissions && 
            <EmissionResults 
              sumEmission={this.state.sumEmissions} 
              emissionArray={this.state.emissionArray}
            />}
          </main>
          </>
        );
      }
};

export default PollutionPollPage;
import React, { Component } from 'react';
import axios from "axios";
import "./PollutionPollPage.scss";
import MoneyInputForm from "../../Components/MoneyInputForm/MoneyInputForm";

class PollutionPollPage extends Component {
    state = {
        energyBill: null,
        energySourceId: null,
        waterBill: null,
        gasBill: null,
        emissionArray: null,
        sumEmissions: null,
      };
    
      // axiosPostRequest = (emissionFactorId, energyBillInput) => {
      //   axios
      //       .post(
      //         "https://beta3.api.climatiq.io/estimate",
      //           {
      //             emission_factor: {
      //               uuid: emissionFactorId,
      //             },
      //             parameters: {
      //               money: energyBillInput,
      //               money_unit: "usd",
      //             }
      //           },
      //         {
      //           headers: { Authorization: "Bearer FJE2K0K7BEMEYRPAPGEW2EHY53PM" },
      //         })
      //         .then((response) => {
      //           console.log(response.data);
      //           this.setState({
      //             test: response.data.co2e
      //           })
      //         })
      //         .catch((error) => console.log(error))
      // }
    
    
      handleFormSubmit = (energySource, estimationBillArray) => {
        
        axios
        .get("http://localhost:4444/activity")
        .then((response) => {
          const energyActivity = response.data.find(activity => activity.activityName === "energy")
          // const waterActivity = response.data.find(activity => activity.activityName === "water")
          // const fuelActivity = response.data.find(activity => activity.activityName === "fuel")
    
    
          const activity = energyActivity.activityId.find(activity => activity.name === energySource)
    
          this.setState({
            energyBill: estimationBillArray[0].estimationValue,
            energySourceId: activity.id,
            waterBill: estimationBillArray[1].estimationValue,
            gasBill: estimationBillArray[2].estimationValue
          });
        })
        .catch(error => console.log(error))
      };
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState.energyBill !== this.state.energyBill)
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
                    money: this.state.waterBill, //Placeholder
                    money_unit: "usd",
                  }
                },
                {
                  emission_factor: {
                    uuid: "bcc20692-49f0-42cc-9ef9-3133769c6d45",
                  },
                  parameters: {
                    money: this.state.gasBill, //Placeholder
                    money_unit: "usd",
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
    
      // componentDidUpdate(prevProps) {
    
      //     this.state.energySourceId
      //     ? axios
      //       .post(
      //         "https://beta3.api.climatiq.io/batch",
      //           [{
      //             emission_factor: {
      //               uuid: this.state.energySourceId,
      //             },
      //             parameters: {
      //               money: this.state.energyBill,
      //               money_unit: "usd",
      //             }
      //           },
      //           {
      //             emission_factor: {
      //               uuid: "1eed671c-7e3d-44e2-85f5-57dc86372cea",
      //             },
      //             parameters: {
      //               money: this.state.waterBill, //Placeholder
      //               money_unit: "usd",
      //             }
      //           },
      //           {
      //             emission_factor: {
      //               uuid: "bcc20692-49f0-42cc-9ef9-3133769c6d45",
      //             },
      //             parameters: {
      //               money: this.state.gasBill, //Placeholder
      //               money_unit: "usd",
      //             }
      //           },
      //         ],
      //         {
      //           headers: { Authorization: "Bearer FJE2K0K7BEMEYRPAPGEW2EHY53PM" },
      //         }
      //       )
      //       .then((response) => {
      //         console.log(response.data);
      //         this.setState({
      //           emissionArray: response.data
      //         })
      //       })
      //       .catch((error) => console.log(error))
      //     : console.log("Loading...");
      // }
    
      render() {
        return (
          <main className="home-page">
            <h1>Pollution Poll</h1>
            <MoneyInputForm 
              handleFormSubmit={this.handleFormSubmit}
              emissions={this.state.emissionArray} 
              state={this.state}
              sumEmissions={this.state.sumEmissions}
            />
          </main>
        );
      }
};

export default PollutionPollPage;
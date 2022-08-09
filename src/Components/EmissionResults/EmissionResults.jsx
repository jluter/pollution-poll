import React, { useState } from 'react';
import axios from 'axios';
import './EmissionResults.scss';
import Sources from '../Sources/Sources';
import ComparisonGraph from '../ComparisonGraph/ComparisonGraph';

const EmissionResults = (props) => {

    const yearEmissions = parseInt((props.sumEmission * 12).toFixed(2));
    const formattedEmissions = yearEmissions.toLocaleString("en-US");
    
    
    
    
    const [averageWaterBill, setAverageWaterBill] = useState(0);


    
    const calculateAverageWaterBill =() => {
        axios
        .get("http://localhost:4444/waterBills")
        .then(response => {
            let sum = 0;
            response.data.forEach(bill => {
                sum = sum + bill.priceWater
            })
            let average = sum/50;
            setAverageWaterBill(average);
        })
        .catch(error => console.log(error));
    }
    
    !averageWaterBill && calculateAverageWaterBill();
    
    const fullInfoEmissionArray = props.emissionArray.results;
    
    const emissionArray = fullInfoEmissionArray.map((object) => {
      const decimal = object.co2e.toFixed(2) * 12;
      const commas = decimal.toLocaleString("en-US");
      return commas;
    });
            



    return (
      <main className="results-page">
        {/* <h1>Your yearly emissions estimate: {formattedEmissions}kg CO2e</h1>
            <h1>Estimated average US water bill: ${averageWaterBill}</h1> */}
        <article className="compare">
          <div>Title</div>
          <div className="compare__chart-wrapper">
            <section className="compare__chart">
              <div>User</div>
              <div>{emissionArray[0]}kg CO2e Energy</div>
              <div>{emissionArray[1]}kg CO2e Water</div>
              <div>{emissionArray[2]}kg CO2e Fuel</div>
              <div>{formattedEmissions}kg CO2e</div>
            </section>
            <section className="compare__chart">
              <div>Average</div>
              <div>Average Energy: 5,308.56kg CO2e</div>
              <div>Average Water: 289.2kg CO2e</div>
              <div>Average Fuel: 4,600kg CO2e</div>
              <div>Average Total: 10,197.76kg CO2e</div>
            </section>
          </div>
        </article>

        {props.emissionArray.results.map((emission, i) => {

            const name = ["Electric Bill Results", "Water Bill Results", "Gas Bill Results"]
            
            const averageName = ["Electric Average Results", "Water Average Results", "Gas Average Results"]

            const averageEmission = [5308.56, 289.2, 4600]
            return (
                <ComparisonGraph 
                    key={emission.emission_factor.activity_id}
                    emission={emission.co2e}
                    name={name[i]}
                    averageName={averageName[i]}
                    averageEmission={averageEmission[i]}
                />
            )
        })}
        <ComparisonGraph 
            emission={props.sumEmission}
            name={"Total Results"}
            averageName={"Total Average Results"}
            averageEmission={10197.76}
        />

        <Sources />
      </main>
    );
};

export default EmissionResults;
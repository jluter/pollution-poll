import React from "react";
import "./MoneyInputForm.scss";

const MoneyInputForm = (props) => {


  return (
    <>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event)

        const estimationBillArray = [];

        for (let i=1; i < event.target.length; i++) {
          if (event.target[i].value) {
            let targetValue = parseInt(event.target[i].value);
            let estimationBillObject = {estimationName: event.target[i].id, 
            estimationValue: targetValue}
  
            estimationBillArray.push(estimationBillObject);
          }
        }

        props.handleFormSubmit(event.target[0].value, estimationBillArray);
      }}
      id="money-input-form"
      type="submit"
      className="money-input-form"
      >
        
      <label htmlFor="energy-source">What is your electricity source?</label>
      <select name="energy-source" id="energy-source">
        <option value="Unknown">Unknown</option>
        <option value="Coal">Coal</option>
        <option value="Gas">Gas</option>
        <option value="Hydro">Hydro-electric</option>
        <option value="Nuclear">Nuclear</option>
        <option value="Solar">Solar</option>
        <option value="Wind">Wind</option>
      </select>
      <label htmlFor="energy-money">What is your monthly electric bill?</label>
      <input type="number" id="energy-money"></input>

      <label htmlFor="water-money">What is your monthly water bill?</label>
      <input type="number" id="water-money"></input>

      <label htmlFor="water-money">What is the average cost of a gallon of gas near you?</label>
      <input type="number" id="gas-per-gallon-money"></input>

      <label htmlFor="water-money">What is your monthly gas bill?</label>
      <input type="number" id="gas-money"></input>
      <button id="form-submit-button" type="submit">CO2e Estimation</button>
    </form>
    {props.sumEmissions ? <h1>{props.sumEmissions} </h1> : console.log("awaiting input")}
    </>
  );
};

export default MoneyInputForm;

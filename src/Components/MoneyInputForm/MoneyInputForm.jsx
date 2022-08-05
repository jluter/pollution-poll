import React from "react";
import "./MoneyInputForm.scss";

const MoneyInputForm = (props) => {
  return (
    <>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event)

        props.handleFormSubmit(parseInt(event.target[1].value), event.target[0].value, event.target[2].value);
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
      <button type="submit">CO2e Estimation</button>
    </form>
    <h1>{props.test}</h1>
    </>
  );
};

export default MoneyInputForm;

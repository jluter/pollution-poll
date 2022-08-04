import React from 'react';
import './MoneyInputForm.scss';

const MoneyInputForm = (props) => {

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.handleFormSubmit(parseInt(event.target[0].value))
        }} id="electricity" type="submit">
            <input type="number"></input>
            <button type="submit">CO2e Estimation</button>
        </form>
    );
};

export default MoneyInputForm;
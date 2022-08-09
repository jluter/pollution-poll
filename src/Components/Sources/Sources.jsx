import React from 'react';

const Sources = () => {
    return (
        <section>
            <ul>
                <li><a href="https://www.eia.gov/electricity/sales_revenue_price/pdf/table5_a.pdf" target="_blank" rel="noopener noreferrer">1: Energy Average</a></li>
                <li><a href="https://worldpopulationreview.com/state-rankings/water-prices-by-state" target="_blank" rel="noopener noreferrer">2: Water Average</a></li>
                <li><a href="https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle#:~:text=2%20per%20mile-,What%20are%20the%20average%20annual%20carbon%20dioxide%20(CO2)%20emissions%20of,of%20carbon%20dioxide%20per%20year." target="_blank" rel="noopener noreferrer">3: Fuel Average</a></li>
            </ul>
        </section>
    );
};

export default Sources;
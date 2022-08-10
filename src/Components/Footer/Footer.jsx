import React from "react";
import "./Footer.scss";
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TbSeeding } from "react-icons/tb";

const Footer = () => {


  return (
    <IconContext.Provider
      value={{
        className: "react-icons",
      }}
    >
      <footer className="footer">
        <div className="react-icons__wrapper">
          <a href="https://github.com/jluter" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
          <a href="https://www.linkedin.com/in/jakob-luter/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
          <a href="https://news.climate.columbia.edu/2018/12/27/35-ways-reduce-carbon-footprint/" target="_blank" rel="noopener noreferrer"><TbSeeding/></a>
        </div>
        <section className="sources-component">
          <ul className="sources-component__list">
            Sources:
            <li className="sources-component__list-item">
              <a
                className="sources-component__list-item--anchor"
                href="https://www.eia.gov/electricity/sales_revenue_price/pdf/table5_a.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Energy Average
              </a>
            </li>
            <li className="sources-component__list-item">
              <a
                className="sources-component__list-item--anchor"
                href="https://worldpopulationreview.com/state-rankings/water-prices-by-state"
                target="_blank"
                rel="noopener noreferrer"
              >
                Water Average
              </a>
            </li>
            <li className="sources-component__list-item">
              <a
                className="sources-component__list-item--anchor"
                href="https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle#:~:text=2%20per%20mile-,What%20are%20the%20average%20annual%20carbon%20dioxide%20(CO2)%20emissions%20of,of%20carbon%20dioxide%20per%20year."
                target="_blank"
                rel="noopener noreferrer"
              >
                Fuel Average
              </a>
            </li>
            <li className="sources-component__list-item">
              <a
                className="sources-component__list-item--anchor"
                href="https://www.climatiq.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Climatiq API
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;

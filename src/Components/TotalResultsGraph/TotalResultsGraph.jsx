import React from "react";
import './TotalResultsGraph.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const TotalResultsGraph = (props) => {

    console.log(props)
    const data = [
      {
        name: "Electric Results",
        Yours: (props.emissions.results[0].co2e * 12).toFixed(2),
        Average: 5308,
        amt: 2400,      },
      {
        name: "Water Results",
        Yours: (props.emissions.results[1].co2e * 12).toFixed(2),
        Average: 289,
      },
      {
        name: "Fuel Results",
        Yours: (props.emissions.results[2].co2e * 12).toFixed(2),
        Average: 4600,
      },
      {
        name: "Total Results",
        Yours: props.total,
        Average: 10197,
      },
    ];


  return (
    <article className="total-results-wrapper">
      <ResponsiveContainer height={600}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis
          width={65}
          padding={{ right: 30 }}
            label={{
              value: `kg of CO2`,
              angle: -90,
              position: "left",
              offset: -2,
              fontSize: "1.2rem",
              fill: "#666",
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip fill="red"/>
          <Area
            type="monotone"
            dataKey="Yours"
            stroke="#8884d8"
            fillOpacity={0.5}
            fill="#4B8F8C"
          />
          <Area
            type="monotone"
            dataKey="Average"
            stroke="#82ca9d"
            fillOpacity={0.5}
            fill="#645853"
          />
        </AreaChart>
      </ResponsiveContainer>
    </article>
  );
};

export default TotalResultsGraph;

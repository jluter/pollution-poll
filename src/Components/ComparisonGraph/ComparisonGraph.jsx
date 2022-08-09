import React from 'react';
import './ComparisonGraph.scss';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";



const ComparisonGraph = (props) => {
  console.log(props);

  const inputNumber = props.emission.toFixed(2);
  const averageNumber = props.averageEmission.toFixed(2);

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-6}
      >{`${value}kg`}</text>
    );
  };

  return (
    <article className="graph-wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          className="graph"
          barCategoryGap={40}
          data={[
            {
              name: props.name,
              Average: averageNumber,
              Yours: inputNumber,
              averageName: props.averageName,
            },
          ]}
          margin={{
            top: 10,
            right: 10,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="10 10" />
          <XAxis dataKey="name" width={20}  style={{
            fontSize: '1.5rem',
            fontFamily: 'Rubik',
          }} />
          <YAxis
            datakey="averageName"
            label={{
              value: `kg of CO2`,
              angle: -90,
              position: "left",
              offset: 10,
              fontSize: '1.5rem',
              fill: '#666'
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="Yours" fill="#4B8F8C" label={renderCustomBarLabel} />
          <Bar dataKey="Average" fill="#645853" label={renderCustomBarLabel} />
        </BarChart>
      </ResponsiveContainer>
    </article>
  );
};

export default ComparisonGraph;
import React from 'react';
import './ComparisonGraph.scss';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";



const ComparisonGraph = (props) => {

    console.log(props)

    const inputNumber = props.emission.toFixed(2)
    const averageNumber = props.averageEmission.toFixed(2)

    const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`CO2: ${value}kg`}</text>;
      };


    return (
      <article className='graph-wrapper'>
        <BarChart
      width={500}
      height={500}
      data={[
        {
            name: props.name,
            Average: averageNumber,
            Yours: inputNumber,
            averageName: props.averageName
        }
      ]}
      margin={{
        top: 5,
        right: 5,
        left: 5,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis datakey="averageName"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="Yours" fill="#4B8F8C" label={renderCustomBarLabel}/>
      <Bar dataKey="Average" fill="#645853" label={renderCustomBarLabel}/>
    </BarChart>
      </article>
    );
};

export default ComparisonGraph;
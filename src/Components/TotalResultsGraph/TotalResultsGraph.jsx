import React from "react";
import './TotalResultsGraph.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const TotalResultsGraph = () => {


    const data = [
        {
          name: 'Electric Results',
          Yours: 4000,
          Average: 2400,
          amt: 2400,
        },
        {
            name: 'Water Results',
            Yours: 2780,
            Average: 3908,
            amt: 2000,
          },
          {
            name: 'Fuel Results',
            Yours: 1890,
            Average: 4800,
            amt: 2181,
          },
          {
            name: 'Total Results',
            Yours: 2390,
            Average: 3800,
            amt: 2500,
          }
    ]


  return (
    <article className="total-results-wrapper">
        <ResponsiveContainer
            width={1000}
            height={500}
        >
      <AreaChart

        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Yours"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="Average"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
      </ResponsiveContainer>
    </article>
  );
};

export default TotalResultsGraph;

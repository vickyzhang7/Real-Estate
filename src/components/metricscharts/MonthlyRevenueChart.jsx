import React from 'react';
import * as V from 'victory';

const MonthlyRevenue = props => {
  const data = [
    { date: new Date('2022-01-01'), value: 2300 },
    { date: new Date('2022-02-01'), value: 2560 },
    { date: new Date('2022-03-01'), value: 5180 },
    { date: new Date('2022-04-01'), value: 6300 },
    { date: new Date('2022-05-01'), value: 2780 },
    { date: new Date('2022-06-01'), value: 2280 },
    { date: new Date('2022-07-01'), value: 3900 },
    { date: new Date('2022-08-01'), value: 2450 },
    { date: new Date('2022-09-01'), value: 1280 },
    { date: new Date('2022-10-01'), value: 1600 },
    { date: new Date('2022-11-01'), value: 7800 },
    { date: new Date('2022-12-01'), value: 3200 },
  ];

  return (
    <div className="my-14 w-1/2">
      <div className="flex flex-row w-full justify-between mb-8">
        <p className="text-zinc-700 text-base font-medium font-poppins border-b border-dashed">
          {props.chartname}
        </p>
        <p className="text-sm font-poppins text-zinc-700 font-normal">
          Average:
          <span className="text-primaryblue-500 mx-auto">${props.Average}</span>
        </p>
        <p className="text-sm font-poppins text-zinc-700 font-normal">
          Minimum:
          <span className="text-primaryblue-500 mx-auto">${props.Minimum}</span>
        </p>
        <p className="text-sm font-poppins text-zinc-700 font-normal">
          Maximum:
          <span className="text-primaryblue-500 mx-auto">${props.Maximum}</span>
        </p>
      </div>
      <V.VictoryChart domainPadding={25} padding={{ left: 60, bottom: 60 }}>
        <V.VictoryAxis
          className="ml-10"
          tickFormat={x => x.toLocaleString('default', { month: 'short' })}
          tickValues={data.map(d => d.date)}
          style={{
            tickLabels: {
              fontFamily: 'Poppins',
              fontSize: '12',
              fill: '#747474',
            },
            axis: { stroke: 'transparent' },
          }}
        />
        <V.VictoryAxis
          className="ml-10"
          dependentAxis
          tickFormat={x => `$${x}-`}
          style={{
            grid: { stroke: 'rgba(0,0,0,0.1)' },
            tickLabels: {
              fontFamily: 'Poppins',
              fontSize: '12',
              fill: '#747474',
            },
            axis: { stroke: 'transparent' },
          }}
        />
        <V.VictoryLine
          data={data}
          x="date"
          y="value"
          style={{
            data: {
              stroke: '#0D65B6',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
          }}
          interpolation="natural"
        />
      </V.VictoryChart>
    </div>
  );
};

export default MonthlyRevenue;

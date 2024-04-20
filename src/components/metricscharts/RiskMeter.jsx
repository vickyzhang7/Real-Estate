import React from 'react';
import GaugeChart from 'react-gauge-chart';

const chartStyle = {
  width: 200,
  height: 90,
  fontFamily: 'Poppins',
};

const RiskMeter = () => {
  const percent = 0.56; // Adjust this value based on your data

  return (
    <div>
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={6}
        arcsLength={[0.16, 0.16, 0.16, 0.16, 0.16, 0.16]}
        colors={[
          '#30AD43',
          '#84BD32',
          '#D1D80F',
          '#FEE114',
          '#FF8888',
          '#FF5656',
        ]}
        percent={percent}
        arcPadding={0.01}
        style={chartStyle}
        textColor="black"
        hideText={true}
      />
      <div
        style={{
          marginTop: '5px',
          textAlign: 'center',
          fontSize: '14px',
          background: '#7EDC7C',
          padding: '3px',
          borderRadius: '5px',
          width: '120px',
          margin: '0 auto',
        }}
      >
        Your Risk: {Math.round(percent * 100)}%
      </div>
    </div>
  );
};

export default RiskMeter;

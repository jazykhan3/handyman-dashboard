import React from 'react';
import PropTypes from 'prop-types';
import ReactECharts from 'echarts-for-react';

const EChartsPieChart = ({ option }:any) => {


  const chartContainerStyle = {
    width: '100%',
    height: '400px',
    border: '1px solid #fff',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'start', // Add space between the chart and legend
  };

  return (
    <div style={chartContainerStyle}>
      <ReactECharts option={option} style={{ flex: 1 }} />
    </div>
  );
};

EChartsPieChart.propTypes = {
  option: PropTypes.shape({
    legendData: PropTypes.arrayOf(PropTypes.string), // Example of specifying legendData as an array of strings
    series: PropTypes.arrayOf(PropTypes.object), // Example of specifying series as an array of objects
  }).isRequired,
};

export default EChartsPieChart;

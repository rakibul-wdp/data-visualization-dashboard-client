import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import useCharts from '../hooks/useCharts';

const DoughnutChart = () => {
  const charts = useCharts();

  const intensity = charts.map((data) => data.intensity);
  const relevance = charts.map((data) => data.relevance);
  const likelihood = charts.map((data) => data.likelihood);
  return (
    <div className='mt-16 mx-16 border-4 border-primary rounded'>
      <h2 className='font-bold text-xl m-8 text-accent'>
        Intensity, Relevance, and Likelihood related to Country and Sector
      </h2>
      <Doughnut
        data={{
          labels: charts.slice(0, 30).map((data) => data.country + ' ' + data.sector),
          datasets: [
            {
              label: 'Intensity',
              data: [...intensity],
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
              hoverOffset: 4,
            },
            {
              label: 'Relevance',
              data: [...relevance],
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
              hoverOffset: 4,
            },
            {
              label: 'Likelihood',
              data: [...likelihood],
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
              hoverOffset: 4,
            },
          ],
        }}
      />
    </div>
  );
};

export default DoughnutChart;

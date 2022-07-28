import React from 'react';
import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import useCharts from '../hooks/useCharts';

const RadarChart = () => {
  const charts = useCharts();

  const intensity = charts.map((data) => data.intensity);
  const relevance = charts.map((data) => data.relevance);
  const likelihood = charts.map((data) => data.likelihood);
  return (
    <div className='mt-16 mx-16 border-4 border-primary rounded'>
      <h2 className='font-bold text-xl m-8 text-accent'>
        Intensity, Relevance, and Likelihood related to Country and Source
      </h2>
      <Radar
        data={{
          labels: charts.map((data) => data.country + ' ' + data.source),
          datasets: [
            {
              label: 'Intensity',
              data: intensity,
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)',
            },
            {
              label: 'Relevance',
              data: relevance,
              fill: true,
              backgroundColor: 'rgb(165, 148, 250, 0.2)',
              borderColor: '#A594FA',
              pointBackgroundColor: '#A594FA',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#A594FA',
            },
            {
              label: 'Likelihood',
              data: likelihood,
              fill: true,
              backgroundColor: 'rgb(255, 232, 2, 0.2)',
              borderColor: '#FFE802',
              pointBackgroundColor: '#FFE802',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#FFE802',
            },
          ],
        }}
        options={{
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        }}
      />
    </div>
  );
};

export default RadarChart;

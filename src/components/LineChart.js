import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import useCharts from '../hooks/useCharts';

const LineChart = () => {
  const charts = useCharts();
  return (
    <div className='mt-16 mx-16 border-4 border-primary rounded'>
      <h2 className='font-bold text-xl m-8 text-accent'>
        Intensity, Relevance, and Likelihood related to Country and Topic
      </h2>
      <Line
        data={{
          labels: charts.map((data) => data.country + ' ' + data.topic),
          datasets: [
            {
              label: 'Intensity',
              data: charts.map((data) => data.intensity),
              fill: false,
              borderColor: '#FF4961',
              tension: 0.1,
            },
            {
              label: 'Relevance',
              data: charts.map((data) => data.relevance),
              fill: false,
              borderColor: '#666EE8',
              tension: 0.1,
            },
            {
              label: 'Likelihood',
              data: charts.map((data) => data.likelihood),
              fill: false,
              borderColor: '#FFE802',
              tension: 0.1,
            },
          ],
        }}
        options={
          {
            // maintainAspectRatio: false,
          }
        }
      />
    </div>
  );
};

export default LineChart;

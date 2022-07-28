import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import useCharts from '../hooks/useCharts';

const VerticalLineChart = () => {
  const charts = useCharts();

  const intensity = charts.map((data) => data.intensity);
  const relevance = charts.map((data) => data.relevance);
  const likelihood = charts.map((data) => data.likelihood);
  return (
    <div className='mt-16 mb-16 mx-16 border-4 border-primary rounded'>
      <h2 className='font-bold text-xl m-8 text-accent'>
        Intensity, Relevance, and Likelihood related to Country and Insight
      </h2>
      <Line
        data={{
          labels: charts.map((data) => data.country + ' ' + data.insight.slice(0, 20)),
          datasets: [
            {
              axis: 'y',
              label: 'Intensity',
              data: intensity,
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
              ],
              borderWidth: 1,
            },
            {
              axis: 'y',
              label: 'Relevance',
              data: relevance,
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
              ],
              borderWidth: 1,
            },
            {
              axis: 'y',
              label: 'Likelihood',
              data: likelihood,
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default VerticalLineChart;

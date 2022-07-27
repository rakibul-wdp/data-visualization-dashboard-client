import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import useCharts from '../hooks/useCharts';

const HorizontalBarChart = () => {
  const charts = useCharts();

  return (
    <div className='mt-16 mx-16 border-4 border-primary rounded'>
      <h2 className='font-bold text-xl m-8 text-accent'>Intensity related to Country [Horizontally]</h2>
      <Bar
        data={{
          labels: charts.map((data) => data.country),
          datasets: [
            {
              axis: 'y',
              label: 'Intensity',
              data: charts.map((data) => data.intensity),
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
        }}
      />
    </div>
  );
};

export default HorizontalBarChart;

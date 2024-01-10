import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChartComponent = ({ speedPoint, stopPoint }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Assume the maximum value for the y-axis is dynamically set by the data
        const maxYValue = 10; // The y-axis should go up to 10
        // Generate the data points
        const dataPoints = [];
        for (let x = 0; x <= 10; x += 0.1) {
          // Increase the granularity to 0.1 for a smoother curve
          let y;
          if (x < speedPoint) {
            // Initial slow linear increase
            y = (maxYValue / Math.pow(speedPoint, 2)) * Math.pow(x, 2);
          } else if (x < stopPoint) {
            // Logarithmic increase after speedPoint and before stopPoint
            y =
              (Math.log(x - speedPoint + 1) /
                Math.log(stopPoint - speedPoint + 1)) *
                (maxYValue -
                  (maxYValue / Math.pow(speedPoint, 2)) *
                    Math.pow(speedPoint, 2)) +
              (maxYValue / Math.pow(speedPoint, 2)) * Math.pow(speedPoint, 2);
          } else {
            // Stop the line at stopPoint
            y =
              (Math.log(stopPoint - speedPoint + 1) /
                Math.log(stopPoint - speedPoint + 1)) *
                (maxYValue -
                  (maxYValue / Math.pow(speedPoint, 2)) *
                    Math.pow(speedPoint, 2)) +
              (maxYValue / Math.pow(speedPoint, 2)) * Math.pow(speedPoint, 2);
            dataPoints.push({ x, y });
            break; // Exit the loop after reaching the stop point
          }
          dataPoints.push({ x, y });
        }

        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            datasets: [
              {
                data: dataPoints,
                borderColor: '#FF6384', // Red line
                backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent fill
                fill: false,
                tension: 0.3, // Slight curve
                pointRadius: 0, // Hide the points by default
                pointBackgroundColor: 'yellow', // Yellow point color
                pointBorderColor: 'orange', // Orange border for the points
              },
            ],
          },
          options: {
            animation: {
              duration: 2000,
              easing: 'easeOutCubic',
            },
            scales: {
              y: {
                beginAtZero: true,
                max: maxYValue,
                display: false, // Hide y-axis labels
              },
              x: {
                type: 'linear',
              },
            },
            elements: {
              point: {
                pointStyle: 'circle',
                radius: (context) => (context.raw.x === stopPoint ? 10 : 0), // Enlarge the point at stopPoint
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
          },
        });

        return () => myChart.destroy();
      }
    }
  }, [speedPoint, stopPoint]);

  return <canvas ref={chartRef} />;
};

export default MyChartComponent;

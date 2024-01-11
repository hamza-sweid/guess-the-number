import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import style from '../styles/chart.module.css';
import { useSelector } from 'react-redux';

const MyChartComponent = ({
  speedPoint,
  stopPoint,
}: {
  speedPoint: number;
  stopPoint: number;
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [animatedStopPoint, setAnimatedStopPoint] = useState(0); // State for animating stopPoint
  const roundDuration = useSelector((state: any) => state.app?.roundDuration);

  useEffect(() => {
    const startTime = Date.now();

    const animateStopPoint = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / roundDuration, 1);
      const currentStopPoint = progress * stopPoint;

      setAnimatedStopPoint(currentStopPoint);

      if (elapsedTime < roundDuration) {
        requestAnimationFrame(animateStopPoint);
      }
    };

    requestAnimationFrame(animateStopPoint);
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const maxYValue = 10; // The y-axis should go up to 10
        const dataPoints = [];
        for (let x = 0; x <= 10; x += 0.1) {
          let y;
          if (x < speedPoint) {
            y = (maxYValue / Math.pow(speedPoint, 2)) * Math.pow(x, 2);
          } else if (x < stopPoint) {
            y =
              (Math.log(x - speedPoint + 1) /
                Math.log(stopPoint - speedPoint + 1)) *
                (maxYValue -
                  (maxYValue / Math.pow(speedPoint, 2)) *
                    Math.pow(speedPoint, 2)) +
              (maxYValue / Math.pow(speedPoint, 2)) * Math.pow(speedPoint, 2);
          } else {
            y =
              (Math.log(stopPoint - speedPoint + 1) /
                Math.log(stopPoint - speedPoint + 1)) *
                (maxYValue -
                  (maxYValue / Math.pow(speedPoint, 2)) *
                    Math.pow(speedPoint, 2)) +
              (maxYValue / Math.pow(speedPoint, 2)) * Math.pow(speedPoint, 2);
            dataPoints.push({ x, y });
            break;
          }
          dataPoints.push({ x, y });
        }

        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            datasets: [
              {
                data: dataPoints,
                borderColor: '#FF6384',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                fill: false,
                tension: 0.3,
                pointRadius: 0,
                pointBackgroundColor: 'yellow',
                pointBorderColor: 'orange',
              },
            ],
          },
          options: {
            animation: {
              duration: roundDuration,
              easing: 'easeOutCubic',
            },
            scales: {
              y: {
                beginAtZero: true,
                max: maxYValue,
                display: false,
              },
              x: {
                type: 'linear',
                beginAtZero: true,
                max: 10,
                ticks: {
                  color: '#eee',
                },
                grid: {},
                border: {
                  color: '#eee',
                },
              },
            },
            elements: {
              point: {
                pointStyle: 'circle',
                radius: (context: any) =>
                  context.raw.x === stopPoint ? 10 : 0,
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

  return (
    <div className={style.chart}>
      <span className={style.stopPoint}>{animatedStopPoint.toFixed(2)}x</span>
      <canvas ref={chartRef} />
    </div>
  );
};

export default MyChartComponent;

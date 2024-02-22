import React, {useState, useEffect} from 'react';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';

const Line = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
            datasets: [
                {
                    label: 'Usuarios',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

  return (
    <Card className='bg-[#f9fafb]'>
        <h2 className='text-lg font-semibold'>Total Usuarios</h2>
        <div className='w-full h-full'>
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    </Card>
  );
};

export default Line;

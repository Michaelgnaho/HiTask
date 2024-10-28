import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function ProjectOverview() {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['60%', '70%', '45%', '10%', '25%', '8%', '20%'],
                datasets: [{
                    data: [60, 70, 45, 10, 25, 8, 20],
                    backgroundColor: [
                        '#7E57C2',
                        '#26A69A',
                        '#0277BD',
                        '#EC407A',
                        '#3949AB',
                        '#FFB300',
                        '#616161'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    },
                    datalabels: {
                        color: '#fff',
                        formatter: (value, context) => {
                            return context.chart.data.labels[context.dataIndex];
                        },
                        font: {
                            weight: 'bold',
                            size: 16
                        }
                    }
                }
            },
            plugins: [ChartDataLabels]
        });

        // Cleanup to remove the chart instance on component unmount
        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg w-[500px]">
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <div className="flex  ">
                <ul className=" flex flex-col gap-4 flex-1 m-2">
                    <li>Deploy major software update</li>
                    <li>Fix critical bug</li>
                    <li>Explore new UI design pattern</li>
                    <li>Address major software issue</li>
                    <li>Meet new clients</li>
                    <li>Develop new project plan</li>
                    <li>Mobile App Developer</li>
                </ul>
                <div className="w-1/2 m-2">
                    <canvas ref={chartRef} width={100} height={100}></canvas>
                </div>
            </div>
        </div>
    );
}

export default ProjectOverview;

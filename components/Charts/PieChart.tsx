"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Pie = dynamic(() => import('react-chartjs-2').then((mod) => mod.Pie), {
    ssr: false,
});
type types = {
    values: number[],
    labels: string[],
    color: string
}
export const PieChart = ({ values, labels, color }: types) => {

    const data = {

        labels: labels,
        datasets: [
            {
                data: values,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                borderColor: color,
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className='w-full h-auto'>
            <Pie data={data} />
        </div>
    );
};
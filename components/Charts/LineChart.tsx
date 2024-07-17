"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
    ssr: false,
});
type types = {
    values: number[],
    labels: string[],
    color: string,
    border: string
}
export const LineChart = ({ values, labels, color, border }: types) => {

    const data = {
        labels: labels,
        datasets: [
            {
                data: values,
                fill: true,
                borderColor: border,
                backgroundColor: color,
                tension: 0.1,
                pointBackgroundColor: '#fff',
                pointRadius: 6,
                pointHoverRadius: 8,
            },
        ],
    };

    return (
        <div className='w-full h-auto'>
            <Line data={data} />
        </div>
    );
};
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJs} from 'chart.js/auto';

const Barchart = ({chartData}) => {
    return (
        <div>
            return <Bar data={chartData} />;
        </div>
    );
};

export default Barchart;
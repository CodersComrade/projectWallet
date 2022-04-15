import React, { useState } from 'react';
import Barchart from '../BarChart/Barchart';
import LineChart from '../LineChart/LineChart';
import PieChart from '../PieChart/PieChart';
import { UserData } from "../../../Data";

const AllChart = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    return (
        <div className='container my-5'>
          <div className="row">
            <div className="col-md-4">
              <Barchart chartData={userData} />
            </div>
            <div className="col-md-4">
              <LineChart chartData={userData} />
            </div>
            <div className="col-md-4">
              <PieChart chartData={userData} />
            </div>
          </div>
        </div>
    );
};

export default AllChart;
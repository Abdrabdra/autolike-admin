import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { IHomePart } from "../../../pages/Home/HomeSection/HomeSection.types";
import { IVisitChart } from "../../../pages/Home/HomeSection/VisitBlock/VisitBlock.types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface Props {
  barData: IVisitChart[];
  count: number;
}

const AreaChart: FC<Props> = ({ count, barData }) => {
  const data = {
    labels: barData.map((e) => {
      return e.month;
    }),

    datasets: [
      {
        fill: true,
        data: barData.map((row) => {
          return row.count;
        }),
        borderColor: "#2398AB",
        backgroundColor: "#E4FFF9",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default AreaChart;

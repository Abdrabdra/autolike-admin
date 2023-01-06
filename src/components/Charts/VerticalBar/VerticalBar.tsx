import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FC, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { COLORS_ORDER } from "../../../constants";
import {
  IHomeAges,
  IHomePart,
} from "../../../pages/Home/HomeSection/HomeSection.types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  count: number;
  barData: IHomePart[];
}

const VerticalBar: FC<Props> = ({ barData, count }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  let color: number = -1;

  const handleColor = () => {
    color++;
  };

  let dataLabels: Array<string> = [];
  barData.map((row) => {
    dataLabels.push(((row.count * 100) / count).toFixed(1));
  });

  useEffect(() => {
    setChartData({
      labels: barData.map((e) => {
        return ` ${e.value}`;
      }),

      datasets: [
        {
          //@ts-ignore
          data: barData.map((row) => {
            return `${((row.count * 100) / count).toFixed(1)}`;
          }),

          //@ts-ignore
          backgroundColor: barData.map((row) => {
            handleColor();
            return COLORS_ORDER[color];
          }),

          //@ts-ignore
          borderRadius: 5,
        },
      ],
    });
    setChartOptions({
      indexAxis: "x" as const,
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: function (value: any, index: any, ticks: any) {
              return "- " + value + "%";
            },
          },
          grid: {
            display: false,
          },
          title: {
            color: "#2398AB", // not working color
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      elements: {
        bar: {
          borderWidth: 1,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (context: any) {
              let label = context.dataset.label || "";

              if (context.parsed.y !== null) {
                label += context.parsed.y + "%";
              }
              return " " + label;
            },
          },
        },
      },
    });
  }, []);

  return <Bar options={chartOptions} data={chartData} />;
};

export default VerticalBar;

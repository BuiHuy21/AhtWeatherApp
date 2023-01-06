import React, { useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { WeatherContext } from "../../GlobalState";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "10:00 am",
  "12:00 am",
  "2:00 am",
  "4:00 am",
  "6:00 am",
  "8:00 am",
  "10:00 am",
  "12:00 am",
  "2:00 am",
  "4:00 am",
  "6:00 am",
  "8:00 am",
  "10:00 am",
  "12:00 am",
  "2:00 am",
  "4:00 am",
  "6:00 am",
  "8:00 am",
];

export function App() {
  const state = useContext(WeatherContext);
  const [weather] = state.todayApi.data;
  const dataHour = weather?.hourly?.slice(0, 18);
  // console.log(dataHour);
  const temp = dataHour?.map((item) => item.temp);
  const feelLike = dataHour?.map((item) => item.feels_like);
  const data = {
    labels,
    datasets: [
      {
        label: "Temp ℃",
        data: temp,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Feel like ℃",
        data: feelLike,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

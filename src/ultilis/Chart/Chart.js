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
import dayjs from "dayjs";

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
  },
};
function mstoTime(duration) {
  let hours = dayjs.unix(duration).hour();
  let minutes = dayjs.unix(duration).minute();
  const ampm = hours >= 12 ? "pm" : "am";
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}

export function App() {
  const state = useContext(WeatherContext);
  const [weather] = state.todayApi.data;
  const dataHour = weather?.hourly;
  const labels = dataHour?.map((item) => mstoTime(item.dt));

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

import dayjs from "dayjs";
import React, { useContext } from "react";
import Visi from "../../asset/Clouds.png";
import Humi from "../../asset/humidity.png";
import Sun from "../../asset/sun.png";
import Sunrise from "../../asset/sunrise.png";
import Tem from "../../asset/thermometer.png";
import WindStatus from "../../asset/wind.png";
import { WeatherContext } from "../../GlobalState";
import Item from "../../ultilis/Item/Item";
import "./today.scss";

const Today = () => {
  const state = useContext(WeatherContext);
  const [weather] = state.todayApi.data;
  // function msToTime(duration) {
  //   var minutes = Math.floor((duration / (1000 * 60)) % 60),
  //     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  //   var ampm = hours >= 12 ? "pm" : "am";

  //   hours = hours < 10 ? "0" + hours : hours;
  //   minutes = minutes < 10 ? "0" + minutes : minutes + " " + ampm;

  //   return hours + ":" + minutes;
  // }

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
  return (
    <div className="main-content">
      <div className="container">
        <Item title="UV index" number={weather?.current?.uvi} img={Sun} />
        <Item
          title="Wind Status"
          number={`${
            Math.round(weather?.current?.wind_speed * 360) / 100
          } Km/h`}
          img={WindStatus}
        />
        <Item
          title="Sunrise "
          number={mstoTime(weather.current?.sunrise)}
          img={Sunrise}
        />
        <Item
          title="Humidity"
          number={`${weather?.current?.humidity} %`}
          img={Humi}
        />
        <Item
          title="Visibility"
          number={`${weather.current?.visibility / 1000} Km`}
          img={Visi}
        />
        <Item
          title="Pressure"
          number={`${weather.current?.pressure} hPa`}
          img={Tem}
        />
      </div>
    </div>
  );
};

export default Today;

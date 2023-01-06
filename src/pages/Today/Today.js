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
  function msToTime(duration) {
    var minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    var ampm = hours >= 12 ? "pm" : "am";

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes + " " + ampm;

    return hours + ":" + minutes;
  }

  const abc = msToTime(1672999200);
  console.log("abc", abc);
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
          number={msToTime(weather.current?.sunrise)}
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
        <Item title="Pressure" number={weather.current?.pressure} img={Tem} />
      </div>
    </div>
  );
};

export default Today;

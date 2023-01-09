import React, { useContext, useEffect, useRef } from "react";
import Img from "../../asset/banner.webp";
import { WeatherContext } from "../../GlobalState";

const Left = () => {
  const state = useContext(WeatherContext);
  const [search, setSearch] = state.todayApi.search;
  const [city] = state.todayApi.city;
  const [weather] = state.todayApi.data;

  const inputRef = useRef();
  const handleChang = (e) => {
    setSearch(e.target.value);
  };
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][new Date().getDay()];

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="left">
      <div className="content">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => handleChang(e)}
            ref={inputRef}
          />
          {!city?.name && (
            <div style={{ color: "red", textAlign: "center", padding: "2px" }}>
              Not Found City{" "}
            </div>
          )}
        </div>
        <div className="image">
          <img
            src={`http://openweathermap.org/img/w/${weather.current?.weather?.[0].icon}.png`}
            alt=""
          />
        </div>
        <div className="daily">
          <div className="adrr">{city?.name}</div>
          <div className="tmp">{weather?.current?.temp} °C</div>
          <div className="time">
            {weekday[0].toUpperCase() + weekday.substring(1)},{" "}
            {formatAMPM(new Date())}
          </div>
          <div className="cloud">
            {weather.current?.weather?.[0].description}
          </div>
          <div className="humidirity">Cloud {weather?.current?.clouds} %</div>
        </div>
        <div className="dailyImg">
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Left;

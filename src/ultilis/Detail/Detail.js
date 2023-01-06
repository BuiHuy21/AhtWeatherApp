import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { WeatherContext } from "../../GlobalState";
import "./Detail.scss";
const Detail = () => {
  let crrParam = useParams();
  const state = useContext(WeatherContext);
  const [weather] = state.todayApi.data;
  const [detail, setDetail] = state.todayApi.detail;
  const [param, setParam] = state.todayApi.param;
  let pr = crrParam.id ? crrParam.id : 0;
  setParam(pr);
  setDetail(weather.daily?.[pr]);

  function msToTime(duration) {
    var minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    var ampm = hours >= 12 ? "pm" : "am";

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes + " " + ampm;

    return hours + ":" + minutes;
  }

  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="detail">
      <h2>{weekday[new Date().getDay()]}</h2>
      <div className="detail-main">
        <div className="detail-left">
          <p>Temp current :{detail?.temp?.day} °C</p>
          <p>
            Temp : {detail?.temp?.min} °C - {detail?.temp?.max} °C
          </p>
          <p>Humidity : {detail?.humidity} %</p>
          <p>Wind speed : {detail?.wind_speed} km/h</p>
        </div>
        <div className="detail-right">
          <p>Sunrise : {msToTime(detail?.sunrise)}</p>
          <p>Sunset : {msToTime(detail?.sunset)} pm</p>
          <p>Description : {detail?.weather?.[0].description}</p>
          <p>Atmospheric pressure : {detail?.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

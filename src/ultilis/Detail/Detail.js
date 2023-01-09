import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { WeatherContext } from "../../GlobalState";
import dayjs from "dayjs";
import "./Detail.scss";
const Detail = () => {
  let crrParam = useParams();
  const state = useContext(WeatherContext);
  const [weather] = state.todayApi.data;
  const [detail, setDetail] = state.todayApi.detail;
  const [param, setParam] = state.todayApi.param;
  let pr = crrParam.id ? crrParam.id : 0;

  useEffect(() => {
    setParam(pr);
    setDetail(weather.daily?.[pr]);
  }, [pr, detail, setDetail, setParam, weather.daily]);

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

  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="detail">
      <h2>{weekday[dayjs.unix(detail?.dt).day()]?.slice(0, 3)}</h2>
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
          <p>Sunrise : {mstoTime(detail?.sunrise)}</p>
          <p>Sunset : {mstoTime(detail?.sunset)} </p>
          <p>Description : {detail?.weather?.[0].description}</p>
          <p>Atmospheric pressure : {detail?.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;

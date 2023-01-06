import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "../../GlobalState";
import Detail from "../../ultilis/Detail/Detail";
import Itemweek from "../../ultilis/Itemweek/Itemweek";
import "./week.scss";
const Week = () => {
  const state = useContext(WeatherContext);
  const [weather] = state.todayApi.data;

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
    <>
      <div className="week-content">
        <div className="week-container">
          <Link to="/week/0">
            <Itemweek
              title={weekday[new Date().getDay()]}
              min={weather?.daily?.[0].temp?.min}
              max={weather?.daily?.[0].temp?.max}
              img={weather?.daily?.[0].weather?.[0].icon}
            />
          </Link>
          <Link to="/week/1">
            <Itemweek
              title={weekday[new Date().getDay() + 1]}
              min={weather?.daily?.[1].temp?.min}
              max={weather?.daily?.[1].temp?.max}
              img={weather?.daily?.[1].weather?.[0].icon}
            />
          </Link>
          <Link to="/week/2">
            <Itemweek
              title={weekday[new Date().getDay() + 2]}
              min={weather?.daily?.[2].temp?.min}
              max={weather?.daily?.[2].temp?.max}
              img={weather?.daily?.[2].weather?.[0].icon}
            />
          </Link>
          <Link to="/week/3">
            <Itemweek
              title={weekday[new Date().getDay() + -4]}
              min={weather?.daily?.[3].temp?.min}
              max={weather?.daily?.[3].temp?.max}
              img={weather?.daily?.[3].weather?.[0].icon}
            />
          </Link>
          <Link to="/week/4">
            <Itemweek
              title={weekday[new Date().getDay() + -3]}
              min={weather?.daily?.[4].temp?.min}
              max={weather?.daily?.[4].temp?.max}
              img={weather?.daily?.[4].weather?.[0].icon}
            />
          </Link>
          <Link to="/week/5">
            <Itemweek
              title={weekday[new Date().getDay() + -2]}
              min={weather?.daily?.[5].temp?.min}
              max={weather?.daily?.[5].temp?.max}
              img={weather?.daily?.[5].weather?.[0].icon}
            />
          </Link>
          <Link to="/week/6">
            <Itemweek
              title={weekday[new Date().getDay() + -1]}
              min={weather?.daily?.[6].temp?.min}
              max={weather?.daily?.[6].temp?.max}
              img={weather?.daily?.[6].weather?.[0].icon}
            />
          </Link>
          <Link to="/week/7">
            <Itemweek
              title={weekday[new Date().getDay() + 0]}
              min={weather?.daily?.[7].temp?.min}
              max={weather?.daily?.[7].temp?.max}
              img={weather?.daily?.[7].weather?.[0].icon}
            />
          </Link>
        </div>
      </div>
      <Detail />
    </>
  );
};

export default Week;

import dayjs from "dayjs";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
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
  ];

  const getDay = (agm) => {
    return weekday[dayjs.unix(weather?.daily?.[agm]?.dt).day()]?.slice(0, 3);
  };

  return (
    <>
      <div className="week-content">
        <div className="week-container">
          <NavLink to="/week/0">
            <Itemweek
              title={getDay(0)}
              min={weather?.daily?.[0].temp?.min}
              max={weather?.daily?.[0].temp?.max}
              img={weather?.daily?.[0].weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/1">
            <Itemweek
              title={getDay(1)}
              min={weather?.daily?.[1].temp?.min}
              max={weather?.daily?.[1].temp?.max}
              img={weather?.daily?.[1].weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/2">
            <Itemweek
              title={getDay(2)}
              min={weather?.daily?.[2].temp?.min}
              max={weather?.daily?.[2].temp?.max}
              img={weather?.daily?.[2].weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/3">
            <Itemweek
              title={getDay(3)}
              min={weather?.daily?.[3].temp?.min}
              max={weather?.daily?.[3].temp?.max}
              img={weather?.daily?.[3].weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/4">
            <Itemweek
              title={getDay(4)}
              min={weather?.daily?.[4].temp?.min}
              max={weather?.daily?.[4].temp?.max}
              img={weather?.daily?.[4].weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/5">
            <Itemweek
              title={getDay(5)}
              min={weather?.daily?.[5].temp?.min}
              max={weather?.daily?.[5].temp?.max}
              img={weather?.daily?.[5].weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/6">
            <Itemweek
              title={getDay(6)}
              min={weather?.daily?.[6].temp?.min}
              max={weather?.daily?.[6].temp?.max}
              img={weather?.daily?.[6].weather?.[0].icon}
            />
          </NavLink>
          <NavLink to="/week/7">
            <Itemweek
              title={getDay(7)}
              min={weather?.daily?.[7].temp?.min}
              max={weather?.daily?.[7].temp?.max}
              img={weather?.daily?.[7].weather?.[0].icon}
            />
          </NavLink>
        </div>
      </div>
      <Detail />
    </>
  );
};

export default Week;

import React from "react";
import "./style.scss";

const Itemweek = ({ title, min, max, img }) => {
  return (
    <div className="item1">
      <div className="title">{title}</div>
      <div className="des">
        <div className="icon-des">
          <img src={`http://openweathermap.org/img/w/${img}.png`} alt="" />
        </div>
        <div className="num">
          {min} ° - {max} °{" "}
        </div>
      </div>
    </div>
  );
};

export default Itemweek;

import React from "react";
import "./item.scss";
const Item = ({ title, number = 0, img }) => {
  return (
    <div className="item">
      <div className="title">{title}</div>
      <div className="des">
        <div className="icon-des">
          <img src={img} alt="" />
        </div>
        <div className="num">{number}</div>
      </div>
    </div>
  );
};

export default Item;

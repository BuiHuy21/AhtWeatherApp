import React from "react";
import { Route, Routes } from "react-router-dom";
import Hour from "../../pages/Hour/Hour";
import Today from "../../pages/Today/Today";
import Week from "../../pages/Week/Week";
import Itemweek from "../../ultilis/Itemweek/Itemweek";
import Nav from "../../ultilis/Nav/Nav";

const Right = () => {
  return (
    <div className="right">
      <Nav />
      <Routes>
        <Route path="/" element={<Today />}></Route>
        <Route path="/week" element={<Week />}>
          <Route path="/week/:id" element={<Itemweek />}></Route>
        </Route>
        <Route path="/hour" element={<Hour />}></Route>
      </Routes>
    </div>
  );
};

export default Right;

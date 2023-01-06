import { createContext } from "react";
import TodayApi from "./api/TodayApi";

export const WeatherContext = createContext();
export const DataProvider = ({ children }) => {
  const state = {
    todayApi: TodayApi(),
  };
  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
};

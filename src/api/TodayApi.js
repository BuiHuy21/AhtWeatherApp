import axios from "axios";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const TodayApi = () => {
  const [weather, setWeather] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState([]);
  const [detail, setDetail] = useState([]);
  const debounce = useDebounce(search ? search : "Hanoi", 1000);
  const [param, setParam] = useState(0);

  const getData = useRef();
  getData.current = async () => {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${debounce}&limit=5&appid=49cc8c821cd2aff9af04c9f98c36eb74`
    );
    const data = response.status === 200 ? response.data[0] : [];
    setCity(data);
    const lat = data?.lat;
    const lon = data?.lon;
    // 8be346cc190753993a74e089aa7b6d57 bh
    // 84f0c05e16abc57b03ca8fa00b59f78e t3h
    // 49cc8c821cd2aff9af04c9f98c36eb74 yt
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=84f0c05e16abc57b03ca8fa00b59f78e`
    );
    const result = res.status === 200 ? res.data : {};
    setWeather(result);
  };

  useEffect(() => {
    getData.current();
  }, [debounce, param, getData]);

  return {
    data: [weather, setWeather],
    search: [search, setSearch],
    city: [city, setCity],
    detail: [detail, setDetail],
    param: [param, setParam],
  };
};
export default TodayApi;

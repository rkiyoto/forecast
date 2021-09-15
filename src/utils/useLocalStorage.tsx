import { useState } from "react";

const useLocalStorage = () => {
  const [cityList, setCityList] = useState<string[]>([]);

  const getList = () => {
    const list = localStorage.getItem("citylist")?.split(",");

    if (list) {
      setCityList(list);
    } else {
      setCityList([]);
    }
  };

  const addToList = (cityName: string) => {
    let list = localStorage.getItem("citylist")?.split(",");
    list = list?.filter((city) => city !== cityName);

    if (list) {
      list = [cityName, ...list];
    } else {
      list = [cityName];
    }

    localStorage.setItem("citylist", list.join(","));
  };

  const removeFromList = (cityName: string) => {
    let list = localStorage.getItem("citylist")?.split(",");
    list = list?.filter((city) => city !== cityName);

    if (list && list.length > 0) {
      localStorage.setItem("citylist", list.join(","));
    } else {
      localStorage.removeItem("citylist");
    }
  };

  return { cityList, getList, addToList, removeFromList };
};

export default useLocalStorage;

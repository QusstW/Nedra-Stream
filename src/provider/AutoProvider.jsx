import React, { createContext, useState } from "react";
import { CARS, MODELS } from "../constants";

export const AutoContext = createContext();

export function AutoProvider(props) {
  //текущее состояние массива всего списка машин
  const [currentCars, setCurrentCars] = useState(CARS);

  const [modelList, setModelList] = useState(MODELS);

  const [modelListState, setModelListState] = useState(false);

  // сортировка по возрастанию, убыванию
  const initialState = [
    { title: "По возрастанию", type: "up" },
    { title: "По убыванию", type: "down" },
  ];
  const isSorting = initialState;

  const isFiltredCar = (type, value) => {
    switch (type) {
      case "brand":
        const brandFind = CARS.filter((car) => car.brand === value);
        setCurrentCars(brandFind);

        const modelList = MODELS.filter((m) => m.brand === value);
        setModelList(modelList);

        setModelListState(true);
        break;

      case "model":
        const modelFind = CARS.filter((car) => car.model === value);
        setCurrentCars(modelFind);
        break;

      case "fuel":
        const fuelFind = CARS.filter((car) => car.fuel === value);
        setCurrentCars(fuelFind);
        break;
      default:
        break;
    }
  };

  const isSortCar = (type, value) => {
    switch (value) {
      case "year":
        if (type === "По возрастанию") {
          const yearAscending = currentCars
            .sort((a, b) => (a.year > b.year ? 1 : -1))
            .slice(0);
          setCurrentCars(yearAscending);
        } else {
          const yearDescending = currentCars
            .sort((a, b) => b.year - a.year)
            .slice(0);
          setCurrentCars(yearDescending);
        }
        break;

      case "price":
        if (type === "По возрастанию") {
          const priceAscending = currentCars
            .sort((a, b) => (a.price > b.price ? 1 : -1))
            .slice(0);
          setCurrentCars(priceAscending);
        } else {
          const priceDescending = currentCars
            .sort((a, b) => b.price - a.price)
            .slice(0);
          setCurrentCars(priceDescending);
        }
        break;
      default:
        break;
    }
  };

  const resetFiltres = () => {
    setCurrentCars(CARS);
  };

  return (
    <AutoContext.Provider
      value={{
        isFiltredCar,
        currentCars,
        modelList,
        modelListState,
        setModelListState,
        //
        isSorting,
        isSortCar,
        resetFiltres,
      }}
      {...props}
    />
  );
}

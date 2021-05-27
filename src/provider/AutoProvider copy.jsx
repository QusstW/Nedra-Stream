import React, { createContext, useState } from "react";
import { CARS, MODELS } from "../constants";

export const AutoContext = createContext();

export function AutoProvider(props) {
  //ТЕКУЩЕЕ ЗНАЧЕНИЕ ПОЛЯ  ПОИСКА ПО БРЕНДУ
  const [currenValueBrand, setCurrentValueBrand] = useState(null);

  //ТЕКУЩИЙ МАССИВ ОБЪЕКТОВ ДЛЯ РЕНДЕРА  В ПОЛЕ ПОИСКА ПО МОДЕЛИ
  const [currentValueArrModel, setCurrentValueArrModel] = useState(null);

  //ТЕКУЩИЙ МАССИВ ОБХЕКТОВ ПОСЛЕ ПРИМЕНЕНИЯ ФИЛЬТРА ПО БРЕНДУ
  const [currentArrBrands, setCurrentArrBrands] = useState();

  //ИВ FORM.JSX 54 СТРОКА ИСПОЛЬЗУЕТСЯ СООБЩАЕТ ЗНАЧЕНИЕ ВВЕДЕННОЙ МОДЕЛИ В ИНПУТ
  const [currentValueModelsToBrand, setCurrentValueModelsToBrand] =
    useState(null);

  React.useEffect(() => {
    isFiltredToBrand();
    isFiltredModelList();
  }, [currenValueBrand]);

  //Фильтр по бренду
  const isFiltredToBrand = () => {
    const brandPassedVerification = CARS.filter(
      (car) => car.brand === currenValueBrand
    );
    setCurrentArrBrands(brandPassedVerification);
  };
  //фильтр MODELS по бренду для списка в поле поиска по модели
  const isFiltredModelList = () => {
    const modelPassedVerification = MODELS.filter(
      (m) => m.brand === currenValueBrand
    );
    setCurrentValueArrModel(modelPassedVerification);
  };

  //ПЕРЕДЕЛАТЬ(БОШКА НЕ ВАРИТ =))
  // const isFiltredToModel = () => {
  //   const isFiltredBrandModel = CARS.filter(
  //     (m) => m.model === currentValueModelsToBrand
  //   );
  // };

  return (
    <AutoContext.Provider
      value={{
        setCurrentValueBrand,
        currenValueBrand,
        currentArrBrands,
        currentValueArrModel,
        //
        setCurrentValueModelsToBrand,
      }}
      {...props}
    />
  );
}

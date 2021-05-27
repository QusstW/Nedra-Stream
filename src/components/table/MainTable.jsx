import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import useAuto from "../../hooks";

const CATEGORY = [
  {
    name: "Изображение",
  },
  {
    name: "Марка",
  },
  {
    name: "Модель",
  },
  {
    name: "Год выпуска",
  },
  {
    name: "Тип топлива",
  },
  {
    name: "Типа кузова",
  },
  {
    name: "Цена",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableWrapper: {
    marginTop: "50px",
  },
});

/*Рендер загаловков таблицы  на основе данных с массива CATEGORY;
 * Для более простого добавления категории заголовка при расширении проекта.
 */
const renderCategory = () => {
  return CATEGORY.map((c, index) => (
    <TableCell key={index}>{c.name}</TableCell>
  ));
};

/*Рендер строк таблицы с данными из объектов массива CARS*/
const renderTableContent = (currentCars) => {
  return currentCars.map((c, index) => (
    <TableRow key={index}>
      <TableCell>
        <img style={{ maxWidth: "150px" }} src={c.image} alt="f" />
      </TableCell>
      <TableCell>{c.brand}</TableCell>
      <TableCell>{c.model}</TableCell>
      <TableCell>{c.year}</TableCell>
      <TableCell>{c.fuel}</TableCell>
      <TableCell>{c.bodyType}</TableCell>
      <TableCell>{c.price} руб.</TableCell>
    </TableRow>
  ));
};

const MainTable = () => {
  const { currentCars } = useAuto();
  const classes = useStyles();

  return (
    <>
      <TableContainer className={classes.tableWrapper} component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          {/* ШАПКА ТАБЛИЦЫ */}
          <TableHead>
            <TableRow>{renderCategory()}</TableRow>
          </TableHead>

          {/* ТЕЛО ТАБЛИЦЫ */}

          <TableBody>{renderTableContent(currentCars)}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default MainTable;

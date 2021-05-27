import React from "react";
import useAuto from "../../../hooks";
import { FUEL } from "../../../constants";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    marginLeft: "50px",
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 22,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function AdditionalSearch() {
  const classes = useStyles();

  const { isSorting, isSortCar, isFiltredCar, resetFiltres } = useAuto();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Дополнительные фильтры
        </Typography>
        <Typography style={{ fontSize: 16 }} variant="h5" component="h2">
          <Autocomplete
            id="combo-box-demo"
            options={isSorting}
            getOptionLabel={(option) => option.title}
            style={{ width: 300, marginTop: "20px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="По году выпуска"
                variant="outlined"
              />
            )}
            onInputChange={(e, value) => {
              const type = "year";
              isSortCar(value, type);
            }}
          />
        </Typography>
        <Typography
          className={classes.pos}
          component={"span"}
          color="textSecondary"
        >
          <Autocomplete
            id="combo-box-demo"
            options={isSorting}
            getOptionLabel={(option) => option.title}
            style={{ width: 300, marginTop: "20px" }}
            renderInput={(params) => (
              <TextField {...params} label="По цене" variant="outlined" />
            )}
            onInputChange={(e, value) => {
              const type = "price";
              isSortCar(value, type);
            }}
          />
        </Typography>
        <Typography component={"span"} variant={"body2"}>
          <Autocomplete
            id="combo-box-demo"
            options={FUEL}
            getOptionLabel={(option) => option.title}
            style={{ width: 300, marginTop: "20px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="По типу топлива"
                variant="outlined"
              />
            )}
            onInputChange={(e, value) => {
              const type = "fuel";
              isFiltredCar(type, value);
            }}
          />
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          onClick={() => {
            resetFiltres();
          }}
          size="large"
          color="secondary"
        >
          Сбросить фильты
        </Button>
      </CardActions>
    </Card>
  );
}

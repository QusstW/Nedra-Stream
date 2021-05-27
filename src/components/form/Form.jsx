import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { BRANDS } from "../../constants";
import { AdditionalSearch } from "../../components";

import useAuto from "../../hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(4),
      width: "25ch",
    },
    wrapper: {
      display: "flex",
    },
  },
}));

const Form = () => {
  //КОНТЕКСТ
  const { isFiltredCar, modelList } = useAuto();

  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{ display: "flex" }}>
        <div style={{}}>
          <Autocomplete
            id="combo-box-demo"
            options={BRANDS}
            getOptionLabel={(option) => option.title}
            style={{ width: 300, marginTop: "20px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Поиск по марке"
                variant="outlined"
              />
            )}
            onInputChange={(e, value) => {
              const type = "brand";
              isFiltredCar(type, value);
            }}
          />
          <Autocomplete
            id="combo-box-demo"
            options={modelList}
            getOptionLabel={(option) => option.title}
            disabled={modelList === "NaN" ? true : false}
            style={{ width: 300, marginTop: "20px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Поиск по модели"
                variant="outlined"
              />
            )}
            onInputChange={(e, value) => {
              const type = "model";
              isFiltredCar(type, value);
            }}
          />
        </div>

        <AdditionalSearch />
      </div>
    </form>
  );
};

export default Form;

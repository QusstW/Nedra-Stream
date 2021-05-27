import React from "react";
import { NavMenu, MainTable, Form } from "../components";
import { Container } from "@material-ui/core";
import { AutoProvider } from "../provider/AutoProvider";

const App = () => {
  return (
    <>
      <AutoProvider>
        <NavMenu />
        <Container maxWidth="lg">
          <Form />
          <MainTable />
        </Container>
      </AutoProvider>
    </>
  );
};

export default App;

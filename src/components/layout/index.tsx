import React from "react";
import S from "./layout-style";
import Header from "../header";
import { Grid } from "@mui/material";
import Map from "../map";
import List from "../list";

const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Grid container spacing={3} style={{ width: "100%", height: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </S.LayoutContainer>
  );
};

export default Layout;

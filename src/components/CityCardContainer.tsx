import React, { useState } from "react";
import { ICity, ICityCardContainer } from "../utils/type/types";
import { Button, Grid, Typography } from "@mui/material";
import CityCard from "./CityCard";

const CityCardContainer = (props: ICityCardContainer) => {


  return (
    <div>
      {props?.cityListData?.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "30px",
            flexWrap: "wrap",
          }}
        >
          <Typography
            color="text.secondary"
            variant="h4"
            textAlign="center"
            padding="0px 15px"
          >
            Searched Result
          </Typography>
          <Button
            variant="outlined"
            style={{ padding: "0px 15px", height: "56px" }}
            onClick={() => {
              props?.setCityListData([]);
              localStorage.removeItem("cityListData");
            }}
          >
            Clear
          </Button>
        </div>
      )}
      {props?.cityListData?.length > 0 && (
        <Grid
          container
          spacing={3}
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#FEF2F4",
            padding: "30px 0px",
            width: "100%"
          }}
        >
          {props?.cityListData?.map((city: ICity) => {
            return (
              <Grid
                key={city?.currentCity ?? "" + city?.Country}
                item
                xs={10}
                sm={8}
                md={5}
                lg={5}
                xl={3.5}
                style={{
                  height: "auto",
                  paddingLeft: "0px",
                  paddingTop: "0px",
                  backgroundColor: "#EEEEEE",
                  marginBottom: "30px",
                }}
              >
                <CityCard city={city} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default CityCardContainer;

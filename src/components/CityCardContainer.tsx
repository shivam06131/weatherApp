import React from "react";
import { ICity } from "../utils/type/types";
import { Button, Grid, Typography } from "@mui/material";
import CityCard from "./CityCard";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCityListData,
  updateCustomCityInfo,
  updateDebouncedSearchText,
} from "../redux/reducers";

const CityCardContainer = () => {
  const dispatch = useDispatch();
  const storeCityListData = useSelector((state: any) => state.cityListData);

  return (
    <div>
      {storeCityListData?.length > 0 && (
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
              //clearing city data
              dispatch(updateCityListData([]));
              //clearing localstorage
              localStorage.removeItem("cityListData");
              //clearing custom city
              dispatch(
                updateCustomCityInfo({
                  isCustomCityEnabled: false,
                })
              );
              //clearing searched texts
              dispatch(updateDebouncedSearchText([]));
            }}
          >
            Clear
          </Button>
        </div>
      )}
      {storeCityListData?.length > 0 && (
        <Grid
          container
          spacing={3}
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#FEF2F4",
            padding: "30px 0px",
            width: "100%",
          }}
        >
          {storeCityListData?.map((city: ICity) => {
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

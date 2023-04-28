import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CustomTypography from "./CustomTypography";
import {
  ICityDataMapped,
  ICustomCardProps,
  IWeatherDataMapped,
  Icordinates,
} from "../utils/type/types";
import { fetchWeatherData, getCurrentLocation } from "../utils/helper";

const CustomCard = (props: ICustomCardProps) => {
  const [cordinates, setCordinates] = useState<Icordinates>({
    latitude: 0,
    longitude: 0,
  });
  //api data
  const [currentWeather, setCurrentWeather] = useState<IWeatherDataMapped>({
    currentTemperature: 0,
    temperatureExtended: [0],
    timeExtended: [""],
    unit: "",
    latitude: 0,
    longitude: 0,
  });
  const [cityName, setCityName] = useState<ICityDataMapped>({
    country: "",
    district: "",
    suburb: "",
  });

  useEffect(() => {
    getCurrentLocation(cityName, setCityName, cordinates, setCordinates);
  }, []);

  const fetchWeatherDataWrapper = () => {
    cordinates.latitude !== 0 &&
      fetchWeatherData(
        cordinates,
        setCurrentWeather,
        currentWeather,
        props.setDailyWeatherData
      );
  };

  useEffect(() => {
    fetchWeatherDataWrapper();
    //To fetch Live data
    // setInterval(() => {
    fetchWeatherDataWrapper();
    // }, 10000);
  }, [cordinates]);

  return (
    <div style={{ textAlign: "center" }}>
      <Grid container spacing={2} style={{ margin: "auto", width: "100%" }}>
        <Grid
          item
          xs={1}
          sm={2}
          md={3.5}
          lg={4}
          xl={4.5}
          style={{ height: "auto", width: "100%" }}
        ></Grid>
        <Grid
          item
          xs={10}
          sm={8}
          md={5}
          lg={4}
          xl={3}
          style={{ height: "auto", paddingLeft: "0px" }}
          sx={{ pl: 0 }}
        >
          <Card sx={{ backgroundColor: "#dae3fd", height: "auto" }}>
            <CardContent>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <CustomTypography
                  condition={Boolean(cityName?.suburb)}
                  typegraphyData={cityName?.suburb}
                  typegraphystyles={{ fontSize: 26 }}
                  loaderHeightWidth={"35"}
                />
                <CustomTypography
                  condition={Boolean(currentWeather?.currentTemperature)}
                  typegraphyData={
                    props?.isCustomised
                      ? (props?.customisedData as string)
                      : currentWeather?.currentTemperature
                  }
                  temperatureData={currentWeather?.unit || ""}
                  additionalProps={{
                    gutterBottom: true,
                  }}
                  typegraphystyles={{ fontSize: 36 }}
                  loaderHeightWidth={"50"}
                />
              </Box>
              <Typography variant="body2" sx={{ mb: 4 }}>
                <WbSunnyIcon sx={{ height: 75, width: 75, color: "orange" }} />
              </Typography>
              <CustomTypography
                condition={Boolean(Number(currentWeather?.latitude))}
                typegraphyData={`latitude ${Number(
                  currentWeather?.latitude
                )?.toFixed(2)}`}
                typegraphystyles={{ mb: 0.5 }}
                loaderHeightWidth={"40"}
              />
              <CustomTypography
                condition={Boolean(Number(currentWeather?.longitude))}
                typegraphyData={`longitude ${Number(
                  currentWeather?.longitude
                )?.toFixed(2)}`}
                typegraphystyles={{ mb: 0.5 }}
                loaderHeightWidth={"40"}
              />
              <CustomTypography
                condition={Boolean(cityName?.country)}
                typegraphyData={cityName?.country}
                typegraphystyles={{ fontSize: 36, mt: 1.5, mb: 0 }}
                loaderHeightWidth={"50"}
              />
              <CustomTypography
                condition={Boolean(cityName?.district)}
                typegraphyData={cityName?.district}
                typegraphystyles={{ mb: 1.5, fontSize: 16 }}
                loaderHeightWidth={"50"}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={1}
          sm={2}
          md={3.5}
          lg={4}
          xl={4.5}
          style={{ height: "auto" }}
        ></Grid>
      </Grid>
    </div>
  );
};

export default CustomCard;

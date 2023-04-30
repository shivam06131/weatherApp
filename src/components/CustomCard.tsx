import React, { useEffect, useRef, useState } from "react";
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
  ICustomCityInfo,
  IWeatherDataMapped,
  Icordinates,
} from "../utils/type/types";
import { fetchWeatherData, getCurrentLocation } from "../utils/helper";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import AcUnitSharpIcon from "@mui/icons-material/AcUnitSharp";

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

  //redux
  const storeCustomCityInfo: ICustomCityInfo = useSelector(
    (state: any) => state?.customCityInfo
    );
    const dispatch = useAppDispatch();
    //to get accurate data inside setInterval
    const latestCustomCityLocalInfo = useRef<ICustomCityInfo>(storeCustomCityInfo);
    
  //updating ref (to get the live data inside the setInterval)
  useEffect(() => {
    latestCustomCityLocalInfo.current = storeCustomCityInfo;
  }, [storeCustomCityInfo]);
  
  const fetchWeatherDataWrapper = (refetch: boolean = false) => {
    if (props?.isCustomised && storeCustomCityInfo?.isCustomCityEnabled) {
      const localCordinates = {
        latitude: latestCustomCityLocalInfo.current?.latitude ?? 0,
        longitude: latestCustomCityLocalInfo.current?.longitude ?? 0,
      };
      fetchWeatherData(
        localCordinates,
        setCurrentWeather,
        currentWeather,
        dispatch,
        storeCustomCityInfo?.isCustomCityEnabled
      );
    } else {
      cordinates.latitude !== 0 &&
        fetchWeatherData(
          cordinates,
          setCurrentWeather,
          currentWeather,
          dispatch,
          !storeCustomCityInfo?.isCustomCityEnabled,
          refetch
        );
    }
  };

  useEffect(() => {
    getCurrentLocation(cityName, setCityName, cordinates, setCordinates);
  }, []);

  useEffect(() => {
    fetchWeatherDataWrapper();
    // To fetch Live data
    setInterval(() => {
      fetchWeatherDataWrapper(true);
    }, 10000);
  }, [cordinates, storeCustomCityInfo]);

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
                  condition={Boolean(
                    storeCustomCityInfo?.isCustomCityEnabled &&
                      props?.isCustomised
                      ? (storeCustomCityInfo?.currentCity as string)
                      : cityName?.suburb
                  )}
                  typegraphyData={
                    storeCustomCityInfo?.isCustomCityEnabled &&
                    props?.isCustomised
                      ? (storeCustomCityInfo?.currentCity as string)
                      : cityName?.suburb
                  }
                  typegraphystyles={{ fontSize: 26 }}
                  loaderHeightWidth={"35"}
                />
                {/* VIST  */}
                <CustomTypography
                  condition={Boolean(currentWeather?.currentTemperature)}
                  typegraphyData={
                    props?.isCustomised
                      ? // storeCustomCityInfo?.isCustomCityEnabled && props.criteriaChanged ? currentWeather?.currentTemperature :
                        (props?.customisedData as string)
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
                {(props?.isCustomised
                  ? (Number(props?.customisedData) as number)
                  : currentWeather?.currentTemperature) < 15 ? (
                  <AcUnitSharpIcon
                    sx={{ height: 75, width: 75, color: "skyblue" }}
                  />
                ) : (
                  <WbSunnyIcon
                    sx={{ height: 75, width: 75, color: "orange" }}
                  />
                )}
              </Typography>
              <CustomTypography
                condition={Boolean(Number(currentWeather?.latitude))}
                typegraphyData={
                  props?.isCustomised && storeCustomCityInfo.isCustomCityEnabled
                    ? `latitude ${Number(
                        storeCustomCityInfo.latitude ?? 0
                      )?.toFixed(2)}`
                    : `latitude ${Number(currentWeather?.latitude)?.toFixed(2)}`
                }
                typegraphystyles={{ mb: 0.5 }}
                loaderHeightWidth={"40"}
              />
              <CustomTypography
                condition={Boolean(Number(currentWeather?.longitude))}
                typegraphyData={
                  props?.isCustomised && storeCustomCityInfo.isCustomCityEnabled
                    ? `longitude ${Number(
                        storeCustomCityInfo.longitude ?? 0
                      )?.toFixed(2)}`
                    : `longitude ${Number(currentWeather?.longitude)?.toFixed(
                        2
                      )}`
                }
                typegraphystyles={{ mb: 0.5 }}
                loaderHeightWidth={"40"}
              />
              <CustomTypography
                condition={Boolean(
                  storeCustomCityInfo?.isCustomCityEnabled &&
                    props?.isCustomised
                    ? (storeCustomCityInfo?.Country as string)
                    : cityName?.country
                )}
                typegraphyData={
                  storeCustomCityInfo?.isCustomCityEnabled &&
                  props?.isCustomised
                    ? (storeCustomCityInfo?.Country as string)
                    : cityName?.country
                }
                typegraphystyles={{ fontSize: 36, mt: 1.5, mb: 0 }}
                loaderHeightWidth={"50"}
              />
              <CustomTypography
                condition={Boolean(
                  storeCustomCityInfo?.isCustomCityEnabled &&
                    props?.isCustomised
                    ? (storeCustomCityInfo?.stateDistrict as string)
                    : cityName?.district
                )}
                typegraphyData={
                  storeCustomCityInfo?.isCustomCityEnabled &&
                  props?.isCustomised
                    ? (storeCustomCityInfo?.stateDistrict as string)
                    : cityName?.district
                }
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

import React, { useEffect, useState } from "react";
import {
  fetchWeatherDataForCity,
  handleSelctionCriteria,
} from "../utils/helper";
import {  IdailyWeatherData } from "../utils/type/types";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import CustomCard from "../components/CustomCard";
import CustomisedCardContainer from "../components/CustomisedCardContainer";
import CustomPopup from "../components/CustomPopup";
import CityCardContainer from "../components/CityCardContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSelectedCriteriaData,
} from "../redux/reducers";

const Homepage = () => {
  //header component data
  const [debouncedSearchText, setDebouncedSearchText] = useState<string[]>([]);
  //for second card (initial data when criteria chananges)
  const [customisedData, setCustomisedData] = useState<number>(0);
  console.log("customisedData",customisedData)
  //loader
  const [loader, setLoader] = useState<boolean>(false);
  
  //Redux
  const dispatch = useDispatch();
  const {
    dailyWeatherData : storeDailyWeatherData,
    selectedTime : storeSelectedTime,
    selectedCriteria: storeSelectedCriteria,
    selectedCriteriaData: storeSelectedCriteriaData,
    cityListData: storeCityListData,
    searchText: storeSearchText,
  } = useSelector((state: any) => state);

  //Debouncing
  useEffect(() => {
    storeSearchText?.length > 0 && setLoader(true);
    const getData = setTimeout(() => {
      if (
        storeSearchText &&
        storeSearchText !== debouncedSearchText[debouncedSearchText?.length - 1]
      ) {
        setDebouncedSearchText([...debouncedSearchText, storeSearchText]);
      } else {
        setLoader(false);
      }
    }, 2000);
    //clearing event (junk event)
    return () => clearTimeout(getData);
  }, [storeSearchText]);

  //fetch weather for city
  useEffect(() => {
    if (storeSearchText !== "" && debouncedSearchText?.includes(storeSearchText)) {
      fetchWeatherDataForCity(
        debouncedSearchText,
        storeCityListData,
        dispatch,
        setLoader
      );
    }
  }, [debouncedSearchText]);

  // update localstorage
  useEffect(() => {
    localStorage.setItem(
      "cityListData",
      JSON.stringify([...storeCityListData])
    );
  }, [storeCityListData]);

  //to create and update the second customSelect data.
  useEffect(() => {
    console.log("storeSelectedCriteria" ,storeSelectedCriteria)
    console.log("storeDailyWeatherData" ,storeDailyWeatherData)
    const criteriaSpecificData = handleSelctionCriteria(
      storeSelectedCriteria,
      storeDailyWeatherData
    );
    criteriaSpecificData &&
      dispatch(updateSelectedCriteriaData([...(criteriaSpecificData as [])]));
  }, [storeSelectedCriteria,storeDailyWeatherData]);

  //creating card data to be shown (for customised card)
  useEffect(() => {
    const filterdData: IdailyWeatherData[] = storeSelectedCriteriaData
      ?.slice(0, 24)
      ?.filter((item: IdailyWeatherData) =>
        item?.time?.includes(storeSelectedTime)
      );
    setCustomisedData(filterdData?.[0]?.temperature);
  }, [storeSelectedTime, storeSelectedCriteriaData]);

  return (
    <div>
      <div style={{ paddingBottom: "50px" }}>
        <Header/>
        <Typography
          color="text.secondary"
          style={{ textAlign: "center", paddingTop: "15px" }}
          variant="h4"
        >
          Live Data
        </Typography>
        <CustomCard   isCustomised={false} />
        <CustomisedCardContainer customisedData={customisedData} />
      </div>
      {loader ? <CustomPopup /> : <CityCardContainer />}
    </div>
  );
};

export default Homepage;

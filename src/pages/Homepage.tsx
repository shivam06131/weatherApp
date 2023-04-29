import React, { useEffect, useState } from "react";
import {
  fetchWeatherDataForCity,
  handleSelctionCriteria,
} from "../utils/helper";
import { ICityListData, IdailyWeatherData } from "../utils/type/types";
import Header from "../components/Header";
import { Typography } from "@mui/material";
import CustomCard from "../components/CustomCard";
import CustomisedCardContainer from "../components/CustomisedCardContainer";
import CustomPopup from "../components/CustomPopup";
import CityCardContainer from "../components/CityCardContainer";
import { list } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCityListData,
  updateSelectedCriteriaData,
} from "../redux/reducers";

const Homepage = () => {
  //header component data
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText, setDebouncedSearchText] = useState<string[]>([]);
  //for second card
  const [customisedData, setCustomisedData] = useState<number>(0);
  //loader
  const [loader, setLoader] = useState<boolean>(false);
  const dispatch = useDispatch();



  const storeDailyWeatherData = useSelector(
    (state: any) => state.dailyWeatherData
  );
  const storeSelectedTime = useSelector((state: any) => state.selectedTime);
  const storeSelectedCriteria = useSelector(
    (state: any) => state.selectedCriteria
  );
  const storeSelectedCriteriaData = useSelector(
    (state: any) => state.selectedCriteriaData
  );
  const storeCityListData = useSelector(
    (state: any) => state.cityListData
  );

  //Debouncing
  useEffect(() => {
    searchText?.length > 0 && setLoader(true);
    const getData = setTimeout(() => {
      if (
        searchText &&
        searchText !== debouncedSearchText[debouncedSearchText?.length - 1]
      ) {
        setDebouncedSearchText([...debouncedSearchText, searchText]);
      } else {
        setLoader(false);
      }
    }, 2000);
    //clearing event (junk event)
    return () => clearTimeout(getData);
  }, [searchText]);


  //featch weather for city
  useEffect(() => {
    if (searchText !== "" && debouncedSearchText?.includes(searchText)) {
      fetchWeatherDataForCity(
        debouncedSearchText,
        // cityListData,
        storeCityListData,
        // setCityListData,
        dispatch,
        setLoader
      );
    }
  }, [debouncedSearchText]);

  // update localstorage
  useEffect(() => {
    localStorage.setItem("cityListData", JSON.stringify([...storeCityListData]));
  }, [storeCityListData]);

  //to create and udpate the second customSelect data.
  useEffect(() => {
    const criteriaSpecificData = handleSelctionCriteria(
      storeSelectedCriteria,
      storeDailyWeatherData
    );
    criteriaSpecificData &&
      dispatch(updateSelectedCriteriaData([...(criteriaSpecificData as [])]));
  }, [storeSelectedCriteria]);

  useEffect(() => {
    const filterdData: IdailyWeatherData[] = storeSelectedCriteriaData
      ?.slice(0, 24)
      ?.filter((item: IdailyWeatherData) =>
        item?.time?.includes(storeSelectedTime)
      );

    setCustomisedData(filterdData?.[0]?.temperature);
  }, [storeSelectedTime, storeSelectedCriteriaData]);

  //creating props
  const createSearchAppBarProps = () => {
    return {
      searchText,
      setSearchText,
    };
  };

  const propData = createSearchAppBarProps();

  return (
    <div>
      <div style={{ paddingBottom: "50px" }}>
        <Header propData={propData} />
        <Typography
          color="text.secondary"
          style={{ textAlign: "center", paddingTop: "15px" }}
          variant="h4"
        >
          Live Data
        </Typography>
        <CustomCard />
        <CustomisedCardContainer customisedData={customisedData} list={list} />
      </div>
      {loader ? (
        <CustomPopup />
      ) : (
        <CityCardContainer
        />
      )}
    </div>
  );
};

export default Homepage;

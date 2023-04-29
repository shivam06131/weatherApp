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
import { useAppDispatch } from "../redux/store";
import { updateDailyWeatherData } from "../redux/reducers";
import { useSelector } from "react-redux";

const Homepage = () => {
  //header component data
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearchText, setDebouncedSearchText] = useState<string[]>([]);
  //handle all the data for weather
  const [dailyWeatherData, setDailyWeatherData] = useState<IdailyWeatherData[]>(
    []
  );
  const [selectedTime, setSelectedTime] = useState<string>("");
  //for second card
  const [customisedData, setCustomisedData] = useState<number>(0);
  //for the dorpdown
  const [selectedCriteria, setSelectedCriteria] = useState<string>("");
  const [selectedCriteriaData, setSelectedCriteriaData] = useState<
    IdailyWeatherData[]
  >([]);
  //city wise data
  const [cityListData, setCityListData] = useState<ICityListData[]>([ 
    ...(JSON.parse(localStorage.getItem("cityListData") as string) ?? []),
  ]);
  //loader
  const [loader, setLoader] = useState<boolean>(false);

  //redux
  const weatherData = useSelector((state : any) => state.dailyWeatherData);
  const storeSelectedTime = useSelector((state : any) => state.selectedTime);
  const storeSelectedCriteria = useSelector((state : any) => state.selectedCriteria);
  
  
  useEffect(() => {
    weatherData && setDailyWeatherData(weatherData)
  },[weatherData])
  
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
        cityListData,
        setCityListData,
        setLoader
      );
    }
  }, [debouncedSearchText]);

  // update localstorage
  useEffect(() => {
    localStorage.setItem("cityListData", JSON.stringify([...cityListData]));
  }, [cityListData]);

  //to create and udpate the second customSelect data.
  useEffect(() => {
    handleSelctionCriteria(
      storeSelectedCriteria,
      setSelectedCriteriaData,
      dailyWeatherData
    );
  }, [storeSelectedCriteria]);

  useEffect(() => {
    const filterdData: IdailyWeatherData[] = selectedCriteriaData
      ?.slice(0, 24)
      ?.filter((item: IdailyWeatherData) => item?.time?.includes(storeSelectedTime));

    setCustomisedData(filterdData?.[0]?.temperature);
  }, [storeSelectedTime, selectedCriteriaData]);

  //creating props
  const createSearchAppBarProps = () => {
    return {
      searchText,
      setSearchText,
    };
  };
  const propData = createSearchAppBarProps();

  return (
    <div >
      <div style={{ paddingBottom: "50px" }}>
        <Header propData={propData} />
        <Typography
          color="text.secondary"
          style={{ textAlign: "center", paddingTop: "15px" }}
          variant="h4"
        >
          Live Data
        </Typography>
        <CustomCard
        />
        <CustomisedCardContainer
          // selectedCriteria={storeSelectedCriteria}
          // setSelectedCriteria={setSelectedCriteria}
          selectedCriteriaData={selectedCriteriaData}
          // selectedTime={storeSelectedTime}
          // setSelectedTime={setSelectedTime}
          // setDailyWeatherData={setDailyWeatherData}
          customisedData={customisedData}
          list={list}
        />
      </div>
      {loader ? (
        <CustomPopup />
      ) : (
        <CityCardContainer
          cityListData={cityListData}
          setCityListData={setCityListData}
        />
      )}
    </div>
  );
};

export default Homepage;

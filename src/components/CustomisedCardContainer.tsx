import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCard from "./CustomCard";
import { ICustomisedCardContainerProps } from "../utils/type/types";
import CustomSelect from "./CustomSelect";
import { updateSelectedCriteria, updateSelectedTime } from "../redux/reducers";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";

const CustomisedCardContainer = (props: ICustomisedCardContainerProps) => {
  const [criteriaChanged, setCriteriaChanged] = useState(true);
  console.log("asdfasfdasc" ,criteriaChanged)
  const {
    list,
    // selectedCriteria,
    // setSelectedCriteria,
    selectedCriteriaData,
    // selectedTime,
    // setSelectedTime,
    // setDailyWeatherData,
    customisedData,
  } = props;


  const dispatch = useAppDispatch();
  const storeSelectedTime = useSelector((state : any) => state.selectedTime);
  const storeSelectedCriteria = useSelector((state : any) => state.selectedCriteria);

  useEffect(() => {
    console.log("criteriaChanged",criteriaChanged)
    criteriaChanged && dispatch(updateSelectedTime(''))
  },[storeSelectedCriteria])

  return (
    <div>
      <Typography
        color="text.secondary"
        style={{ textAlign: "center", paddingTop: "15px" }}
        variant="h4"
      >
        Get Customised Data
      </Typography>
      <div style={{ textAlign: "center" }}>
        <CustomSelect
          data={list}
          setVariable={storeSelectedCriteria}
          // setterFunction={setSelectedCriteria}
          inputCategory="Criteria"
          filteringCriteria="Criteria"
          setCriteriaChanged={setCriteriaChanged}
        />
        {storeSelectedCriteria && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              sx={{ paddingRight: "30px", height: "56px" }}
              variant="outlined"
              onClick={() => {
                // setSelectedCriteria("");
                dispatch(updateSelectedCriteria("")); 
              }}
            >
              Remove Card
            </Button>
            <CustomSelect
              data={selectedCriteriaData}
              setVariable={storeSelectedTime}
              // setterFunction={setSelectedTime}
              filteringCriteria={selectedCriteriaData?.[0]?.time}
              setCriteriaChanged={setCriteriaChanged}
            />
          </div>
        )}
      </div>
      {storeSelectedCriteria && (
        <CustomCard
          // setDailyWeatherData={setDailyWeatherData}
          // dailyWeatherData={selectedCriteriaData}
          isCustomised={Boolean(customisedData)}
          customisedData={customisedData as string}
        />
      )}
    </div>
  );
};

export default CustomisedCardContainer;

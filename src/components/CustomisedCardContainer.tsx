import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCard from "./CustomCard";
import { ICustomisedCardContainerProps } from "../utils/type/types";
import CustomSelect from "./CustomSelect";
import {
  updateCustomCityInfo,
  updateSelectedCriteria,
  updateSelectedTime,
} from "../redux/reducers";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { list } from "../utils";

const CustomisedCardContainer = (props: ICustomisedCardContainerProps) => {
  const [criteriaChanged, setCriteriaChanged] = useState(true);
  const { customisedData } = props;

  const dispatch = useAppDispatch();
  const storeSelectedTime = useSelector((state: any) => state.selectedTime);
  const storeSelectedCriteria = useSelector(
    (state: any) => state.selectedCriteria
  );
  const storeSelectedCriteriaData = useSelector(
    (state: any) => state.selectedCriteriaData
  );

  useEffect(() => {
    criteriaChanged && dispatch(updateSelectedTime(""));
  }, [storeSelectedCriteria]);

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
                dispatch(updateSelectedCriteria(""));
                dispatch(
                  updateCustomCityInfo({
                    isCustomCityEnabled: false,
                  })
                );
              }}
            >
              Remove Card
            </Button>
            <CustomSelect
              data={storeSelectedCriteriaData}
              setVariable={storeSelectedTime}
              filteringCriteria={storeSelectedCriteriaData?.[0]?.time}
              setCriteriaChanged={setCriteriaChanged}
            />
          </div>
        )}
      </div>
      {storeSelectedCriteria && (
        <CustomCard
          criteriaChanged={criteriaChanged}
          isCustomised={Boolean(customisedData)}
          customisedData={customisedData as string}
        />
      )}
    </div>
  );
};

export default CustomisedCardContainer;

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import CustomTypography from "./CustomTypography";
import { ICityCardProps } from "../utils/type";

function CityCard(props: ICityCardProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <Card sx={{ minWidth: 275, backgroundColor: "#BA90C6", height: "auto" }}>
        <CardContent>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <CustomTypography
              condition={true}
              typegraphyData={
                props?.city?.currentCity ?? "current city not available"
              }
              typegraphystyles={{ fontSize: 26 }}
              loaderHeightWidth={"35"}
            />
            <CustomTypography
              condition={true}
              typegraphyData={props?.city?.temperature ?? "temp not available"}
              temperatureData={"°C"}
              typegraphystyles={{ fontSize: 36 }}
              loaderHeightWidth={"50"}
            />
          </Box>
          <Typography variant="body2" sx={{ mb: 4 }}>
            {(props?.city?.temperature as number) < 15 ? (
              <AcUnitSharpIcon
                sx={{ height: 75, width: 75, color: "skyblue" }}
              />
            ) : (
              <WbSunnyIcon sx={{ height: 75, width: 75, color: "orange" }} />
            )}
          </Typography>
          <CustomTypography
            condition={true}
            typegraphyData={`latitude ${
              Number(props?.city?.latitude)?.toFixed(2) ?? " not available"
            }`}
            typegraphystyles={{ mb: 0.5 }}
            loaderHeightWidth={"40"}
          />
          <CustomTypography
            condition={true}
            typegraphyData={`longitude ${
              Number(props?.city?.longitude)?.toFixed(2) ?? " not available"
            }`}
            typegraphystyles={{ mb: 0.5 }}
            loaderHeightWidth={"40"}
          />
          <CustomTypography
            condition={true}
            typegraphyData={props?.city?.Country ?? "City not available"}
            typegraphystyles={{ fontSize: 36, mt: 1.5, mb: 0 }}
            loaderHeightWidth={"50"}
          />
          <CustomTypography
            condition={true}
            typegraphyData={props?.city?.stateDistrict ?? "no district found"}
            typegraphystyles={{ mb: 1.5, fontSize: 16 }}
            loaderHeightWidth={"50"}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default CityCard;

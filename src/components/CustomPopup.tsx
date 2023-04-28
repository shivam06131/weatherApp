import { Grid } from "react-loader-spinner";

const CustomPopup = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        height="300px"
        width="300px"
        color="#FF6000"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default CustomPopup;

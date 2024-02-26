import Loader from "react-js-loader";

function Loaders() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        float: "right",
      }}
    >
      <Loader
        type="bubble-top"
        bgColor={"#6c926d"}
        color={"#6c926d"}
        size={100}
        
      />
    </div>
  );
}

export default Loaders;

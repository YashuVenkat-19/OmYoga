import React from "react";
import "../../assets/css/login.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/yoga-academy/login");
  };
  return (
    <div className="blur-container">
      <div className="content-container">
        <h2 className="mt-48 font-head text-center leading-9 tracking-tight text-white">
          ZenVista *
        </h2>
        <div className="text-xl font-para text-white text-center p-4 mt-10">
          {/* Error */}
        </div>
        <div className="text-l font-para text-white text-center  m-2">
          Oops! Something went wrong!
        </div>
        <div className="text-l font-para text-white text-center m-2">
          The page you are looking for does not exist.
        </div>
        <div className="text-l font-para text-white p-4 text-center m-2">
          Go back to{" "}
          <span className="underline text-blue-500" onClick={handleHome}>
            beginning
          </span>
        </div>
      </div>
    </div>
  );
};

export default Error;

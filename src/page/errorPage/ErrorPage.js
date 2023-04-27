import React from "react";
import error from "../../assets/error.gif";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[96vh]">
      <img src={error} alt="" />
    </div>
  );
};

export default ErrorPage;

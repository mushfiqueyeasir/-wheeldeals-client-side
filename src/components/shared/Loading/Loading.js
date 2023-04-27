import React from "react";

const Loading = ({ small }) => {
  return (
    <div
      className={
        small
          ? ` flex justify-center items-center`
          : `fixed top-[45vh]  md:top-[43vh] lg:top-[40vh]  left-[35vw] md:left-[] lg:left-[45%]`
      }
    >
      <div
        className={`loader ${small ? "w-[4rem]" : "w-[10rem]"} ${
          small ? "h-[4rem]" : "h-[10rem]"
        } shadow-lg`}
      ></div>
    </div>
  );
};

export default Loading;

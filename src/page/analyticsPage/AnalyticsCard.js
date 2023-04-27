import React from "react";

const AnalyticsCard = ({ icon, number, name }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#EBA83A] p-8 rounded-lg text-bold capitalize">
      <div className="flex gap-x-2 justify-center items-center text-3xl">
        {icon}
        <h2>{number}</h2>
      </div>
      <h1 className="pt-2">{name}</h1>
    </div>
  );
};

export default AnalyticsCard;

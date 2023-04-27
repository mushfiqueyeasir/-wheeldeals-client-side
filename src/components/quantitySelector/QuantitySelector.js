import React, { useState } from "react";

const QuantitySelector = ({ productStock, setQuantity }) => {
  const [tempQuantity, setTempQuantity] = useState(1);
  const quantityIncrease = () => {
    if (tempQuantity < productStock) {
      setTempQuantity(tempQuantity + 1);
      setQuantity(tempQuantity + 1);
    }
  };
  const quantityDecrease = () => {
    if (tempQuantity > 0) {
      setTempQuantity(tempQuantity - 1);
      setQuantity(tempQuantity - 1);
    }
  };
  return (
    <div className="flex  gap-x-3 items-center">
      <p className="font-semibold text-xl ">Quantity</p>
      <div className="flex items-center text-xl font-bold">
        <button
          type="button"
          onClick={quantityDecrease}
          className="px-3 bg-gray-200 hover:bg-gray-300"
        >
          -
        </button>
        <span className="w-[50px] outline-none text-center">
          {tempQuantity}
        </span>
        <button
          type="button"
          onClick={quantityIncrease}
          className="px-3 bg-gray-200 hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;

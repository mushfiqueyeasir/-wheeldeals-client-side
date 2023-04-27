import React, { useContext } from "react";
import User from "./User";
import { GLOBAL_CONTEXT } from "../../../layouts/AppLayout";

import { Link } from "react-router-dom";

const Cart = () => {
  const { user, cart } = useContext(GLOBAL_CONTEXT);

  return (
    <div className="flex items-center justify-center">
      {user.role === "customer" && (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item bg-white text-black">
                {cart.length}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="rounded-xl dropdown-content w-52 bg-black shadow"
          >
            <div className="p-4 flex flex-col gap-y-3 text-[#EBA83A]">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex  items-center gap-x-2 w-full"
                >
                  <div>
                    <img
                      src={item.productImage}
                      alt=""
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </div>
                  <div>
                    <p>X {item.productQuantity}</p>
                  </div>
                </div>
              ))}
            </div>
            {cart.length === 0 && (
              <h1 className="text-white text-center  pb-4">Lets shop!</h1>
            )}
            <div className="card-actions ">
              <Link
                to="/dashboard/cart"
                className="bg-[#EBA83A] text-white text-base font-semibold py-3  btn-block  rounded-b-xl flex justify-center"
              >
                View cart
              </Link>
            </div>
          </div>
        </div>
      )}
      <User />
    </div>
  );
};

export default Cart;

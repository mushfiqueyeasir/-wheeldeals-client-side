import React, { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import CartCard from "./CartCard";
import { create } from "../../hooks/create";
import UserRouteAuth from "../../auth/userRouteAuth";

const CartPage = () => {
  const { cart, cartRefetch, productRefetch, ordersRefetch, userOrderRefetch } =
    useContext(GLOBAL_CONTEXT);

  let productQuantity = 0;
  let total = 0;

  cart.forEach((element) => {
    productQuantity += element.productQuantity;
    total += element.productQuantity * element.productPrice;
  });

  const handleCheckout = () => {
    cart.forEach((element, index) => {
      const data = {
        userPhoneNumber: element.userPhoneNumber,
        productName: element.productName,
        productImage: element.productImage,
        productPrice: element.productPrice,
        productQuantity: element.productQuantity,
        productID: element.productID,
        cartItemID: element._id,
      };

      create({
        endPoint: "order",
        data: data,
        refetch: cartRefetch,
        additionalRefetch: productRefetch,
        additionalRefetch2: ordersRefetch,
        additionalRefetch3: userOrderRefetch,
        message: index + 1 === cart.length && "Order Placed!",
      });
    });
  };

  return (
    <UserRouteAuth>
      {" "}
      <section className="py-10 lg:w-[50%] mx-auto">
        {cart.length !== 0 ? (
          <div>
            <div className="flex flex-col gap-y-1">
              {cart.map((item) => (
                <div key={item._id}>
                  <CartCard key={item._id} item={item} />
                  <hr className="border-[1.5px] border-gray-400  mt-1" />
                </div>
              ))}
            </div>
            <div className="lg:w-[50%] mx-auto py-6">
              <div className="flex justify-between items-center  pb-2">
                <h1>Product Quantity</h1>
                <h2>{productQuantity}</h2>
              </div>
              <div className="flex justify-between items-center">
                <h1>Total</h1>
                <h2>${total}</h2>
              </div>
              <div className="flex justify-center py-6">
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="py-3 bg-[#3EBFA4] uppercase text-base  text-white px-8 "
                >
                  checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-center">Your Cart Is Empty!</h2>
          </div>
        )}
      </section>
    </UserRouteAuth>
  );
};

export default CartPage;

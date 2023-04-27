import React, { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../../components/shared/Loading/Loading";
import QuantitySelector from "../../components/quantitySelector/QuantitySelector";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import { create } from "../../hooks/create";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { user, cartRefetch, productRefetch, ordersRefetch, userOrderRefetch } =
    useContext(GLOBAL_CONTEXT);
  const [quantity, setQuantity] = useState(1);

  const [product, productLoading, refetch] = useFetch({
    api: "product",
    parameter: id,
  });
  if (productLoading) {
    return <Loading small={true} />;
  }
  const {
    productName,
    productBrand,
    productImage,
    productDescription,
    productPrice,
    productStock,
  } = product[0];

  const setOrder = () => {
    const data = {
      userPhoneNumber: user.phoneNumber,
      productName: productName,
      productImage: productImage,
      productPrice: productPrice,
      productQuantity: quantity,
      productID: id,
    };
    create({
      endPoint: "order",
      data: data,
      refetch: refetch,
      additionalRefetch: productRefetch,
      additionalRefetch2: ordersRefetch,
      additionalRefetch3: userOrderRefetch,
      message: "Order Placed!",
    });
  };

  const addToCart = () => {
    const data = {
      userPhoneNumber: user.phoneNumber,
      productName: productName,
      productImage: productImage,
      productPrice: productPrice,
      productQuantity: quantity,
      productID: id,
    };
    console.log(data);
    create({
      endPoint: "cart",
      data: data,
      refetch: cartRefetch,
      message: "Item Added T0 Cart!",
    });
  };
  return (
    <div className="container lg:w-[50%] mx-auto py-10 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" h-[30rem]">
          <img
            src={productImage}
            alt=""
            className="object-contain  h-[30rem]"
          />
        </div>
        <div className="flex flex-col justify-between gap-y-4">
          <div>
            <h2 className="text-3xl flex items-center gap-x-2 font-bold capitalize pb-3">
              {productName}
              <div className="badge bg-[#EBA83A] border-0  p-3 font-light">
                {productBrand}
              </div>
            </h2>
            <p className="text-sm ">{productDescription}</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="font-semibold text-base">
              <p>Price: ৳{productPrice}</p>
              <p>Stock: {productStock}</p>
            </div>
            <div>
              <QuantitySelector
                productStock={productStock}
                setQuantity={setQuantity}
              />
            </div>
            <div className="flex  gap-x-3">
              <button
                type="button"
                onClick={setOrder}
                className="px-6 py-2  border-2 border-blue-500  bg-blue-500 text-white font-semibold"
              >
                Buy Now
              </button>
              <button
                type="button"
                onClick={addToCart}
                className="px-6 py-2  border-2 border-[#EBA83A]  bg-[#EBA83A] text-white font-semibold"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

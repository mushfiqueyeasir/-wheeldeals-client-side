import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product, index }) => {
  const {
    _id,
    productName,
    productBrand,
    productImage,
    productPrice,
    productStock,
  } = product;
  return (
    <article
      className={`card border h-[30rem] relative overflow-hidden shadow-xl duration-500 text-white ${
        index === 0 ? "productCardReverse" : "productCard"
      }`}
    >
      <figure className="">
        <img src={productImage} alt="bike" className="displayProduct" />
      </figure>
      <div className="absolute bottom-0 px-4 py-3 z-50 bg-[#020000c4] w-full">
        <h2 className="card-title capitalize">
          {productName}
          <div className="badge bg-[#EBA83A] border-0  p-3">{productBrand}</div>
        </h2>
        <div className="flex justify-between items-center">
          <h2 className="card-title">
            Price:<span className="font-[500]">${productPrice}</span>
          </h2>
          <h2 className="card-title">
            Stock:<span className="font-[500]">{productStock}</span>
          </h2>
        </div>

        <div className="card-actions justify-end pt-4">
          <Link
            to={`/product/${_id}`}
            className="btn btn-outline border-2 border-[#EBA83A] hover:bg-[#EBA83A] hover:border-[#EBA83A] text-[#EBA83A] font-extrabold tracking-wider detailButton"
          >
            Order Now
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

import React from "react";
import "./ProductCard.css";

const ProductCard = ({ index }) => {
  return (
    <article
      className={`card border shadow-xl duration-500 ${
        index === 0 ? "productCardReverse" : "productCard"
      }`}
    >
      <figure>
        <img
          src="https://www.suzuki.com.bd/images/bike_models/preview_images/bike_preview_image__166788186512183.png"
          alt="bike"
        />
      </figure>
      <div className="card-body px-4 pb-3">
        <h2 className="card-title">
          Bike Model
          <div className="badge bg-[#EBA83A] border-0  p-3">Bike Brand</div>
        </h2>
        <p>
          Bike Details blablablablablalballabalbla blablablablablalballabalbla
          blablablablablalballabalbla
        </p>
        <div className="flex justify-between items-center">
          <h2 className="card-title">
            Price:<span className="font-[500]">$540</span>
          </h2>
          <h2 className="card-title">
            Stock:<span className="font-[500]">40</span>
          </h2>
        </div>

        <div className="card-actions justify-end pt-4">
          <button className="btn bg-black border-black hover:bg-[#181818f6]">
            Order Now
          </button>
          <button className="btn btn-outline border-2 border-[#EBA83A] hover:bg-[#EBA83A] hover:border-[#EBA83A] text-[#EBA83A] font-extrabold tracking-wider detailButton">
            Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

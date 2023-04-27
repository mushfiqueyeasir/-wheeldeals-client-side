import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ index, review, name }) => {
  let rating = new Array(5).fill(1);
  return (
    <article
      className={`p-8 shadow duration-500 border cursor-pointer ${
        index === 0 ? "reviewCardReverse" : "reviewCard"
      }`}
    >
      <p>{review}</p>
      <div className="rating py-4">
        {rating.map((item, index) => (
          <div
            key={index}
            name="rating-8"
            className="mask mask-star-2 bg-orange-400"
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgS9gt7bRQjO4-HPlDtfczUF7pOHNwDfqHnZgrbXm4qgyul1MgHkneswnmeMRUQNolJeM&usqp=CAU"
            alt=""
            className="w-[100px] h-[100px] rounded-full"
          />
        </div>
        <div>
          <h1 className="font-bold text-xl">{name}</h1>
          <h2 className="font-semibold text-xl text-[#EBA83A]">Customer</h2>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;

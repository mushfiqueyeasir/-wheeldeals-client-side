import React from "react";
import ReviewCard from "../reviewCard/ReviewCard";

const ReviewSection = () => {
  return (
    <section className="container mx-auto py-10 px-2">
      <h1 className="text-[#EBA83A] font-[900] text-3xl lg:text-4xl">
        Customer{" "}
        <span className="border-b-[3px] border-[#EBA83A] text-black">
          Review
        </span>
      </h1>

      <div className="pt-6 grid grid-cols-1 md:grid-cls-2 lg:grid-cols-3 gap-4">
        <ReviewCard index={0} />
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
};

export default ReviewSection;

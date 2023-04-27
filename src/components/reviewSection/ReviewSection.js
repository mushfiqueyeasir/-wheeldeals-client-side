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
        <ReviewCard
          index={0}
          review="I had a fantastic shopping experience on wheeldeals The website was well-designed and easy to navigate, with a wide selection of high-quality products. The product descriptions were accurate and informative, which helped me make an informed purchase. The checkout process was smooth, and my order arrived promptly. I highly recommend wheeldeals to anyone looking for a hassle-free online shopping experience"
          name="Jhon Doe"
        />
        <ReviewCard
          review="I recently discovered wheeldeals.netlify.app and was impressed with the range of products available on the site. The website was easy to use, and I was able to find what I was looking for quickly. The prices were also very reasonable, and the checkout process was fast and efficient. My order arrived in a timely manner, and I was pleased with the quality of the products I received. I will definitely be returning to wheeldeals.netlify.app for my future shopping needs."
          name="Ibrahim Linkon"
        />
        <ReviewCard
          review="Wheeldeals.netlify.app is my go-to website for all my online shopping needs. The site is well-organized, with a great selection of products at competitive prices. The checkout process is smooth and hassle-free, and I always receive my orders in a timely manner. The customer service team is also very responsive and helpful. I highly recommend wheeldeals.netlify.app to anyone looking for a reliable and convenient online shopping experience"
          name="Ikbal Bin Mortuza"
        />
      </div>
    </section>
  );
};

export default ReviewSection;

import React from "react";
import Slogan from "../../components/slogan/Slogan";
import Banner from "../../components/banner/Banner";
import FeatureProduct from "../../components/featureProduct/FeatureProduct";
import About from "../../components/about/About";
import Statistics from "../../components/statistics/Statistics";
import Slogan2 from "../../components/slogan2/Slogan2";
import ReviewSection from "../../components/reviewSection/ReviewSection";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Slogan />
      <FeatureProduct />
      <Slogan2 />
      <About />
      <Statistics />
      <ReviewSection />
    </section>
  );
};

export default HomePage;

import React from "react";
import CustomBanner from "../../components/customBanner/CustomBanner";
import ProductCard from "../../components/productCard/ProductCard";

const ProductPage = () => {
  return (
    <section>
      <CustomBanner title="Products" />

      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cls-2 lg:grid-cols-3 gap-4 min-h-[50vh]">
        <ProductCard index={0} />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductPage;

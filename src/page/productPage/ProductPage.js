import React, { useContext } from "react";
import CustomBanner from "../../components/customBanner/CustomBanner";
import ProductCard from "../../components/productCard/ProductCard";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";

const ProductPage = () => {
  const { product } = useContext(GLOBAL_CONTEXT);
  return (
    <section>
      <CustomBanner title="Products" />

      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cls-2 lg:grid-cols-3 gap-4 min-h-[50vh]">
        {product.map((item, index) => (
          <ProductCard key={item._id} index={index} product={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductPage;

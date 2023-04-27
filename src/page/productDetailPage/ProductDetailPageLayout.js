import React from "react";
import RequireAuth from "../../auth/RequireAuth";
import CustomBanner from "../../components/customBanner/CustomBanner";
import ProductDetailPage from "./ProductDetailPage";

const ProductDetailPageLayout = () => {
  return (
    <RequireAuth>
      <section>
        <CustomBanner title="Product Details" />
        <ProductDetailPage />
      </section>
    </RequireAuth>
  );
};

export default ProductDetailPageLayout;

import React from "react";
import RequireAuth from "../../auth/RequireAuth";
import CustomBanner from "../../components/customBanner/CustomBanner";
import ProductDetailPage from "./ProductDetailPage";
import UserRouteAuth from "../../auth/userRouteAuth";

const ProductDetailPageLayout = () => {
  return (
    <RequireAuth>
      <UserRouteAuth>
        <section>
          <CustomBanner title="Product Details" />
          <ProductDetailPage />
        </section>
      </UserRouteAuth>
    </RequireAuth>
  );
};

export default ProductDetailPageLayout;

import React, { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import ProductManageCard from "../../components/productCard/ProductManageCard";
import AdminRouteAuth from "../../auth/adminRouteAUth";

const ProductManagePage = () => {
  const { product } = useContext(GLOBAL_CONTEXT);
  return (
    <AdminRouteAuth>
      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
          {product.map((item) => (
            <ProductManageCard key={item._id} product={item} />
          ))}
        </div>
      </section>
    </AdminRouteAuth>
  );
};

export default ProductManagePage;

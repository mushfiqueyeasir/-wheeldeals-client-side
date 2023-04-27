import React from "react";

import ProductCreateForm from "../../components/productCreateForm/ProductCreateForm";
import AdminRouteAuth from "../../auth/adminRouteAUth";

const AddProductPage = () => {
  return (
    <AdminRouteAuth>
      <section className=" py-10">
        <ProductCreateForm />
      </section>
    </AdminRouteAuth>
  );
};

export default AddProductPage;

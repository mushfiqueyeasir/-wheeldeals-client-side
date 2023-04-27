import React from "react";
import ProductEditForm from "../../components/productEditForm/ProductEditForm";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import Loading from "../../components/shared/Loading/Loading";
import AdminRouteAuth from "../../auth/adminRouteAUth";

const ProductEditPage = () => {
  const { id } = useParams();

  const [product, productLoading] = useFetch({
    api: "product",
    parameter: id,
  });
  if (productLoading) {
    return <Loading />;
  }
  return (
    <AdminRouteAuth>
      <section className=" py-10">
        <ProductEditForm product={product} />
      </section>
    </AdminRouteAuth>
  );
};

export default ProductEditPage;

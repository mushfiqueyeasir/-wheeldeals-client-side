import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/shared/Loading/Loading";
import CustomerUpdateForm from "../../components/customerUpdateForm/CustomerUpdateForm";
import AdminRouteAuth from "../../auth/adminRouteAUth";

const CustomerUpdatePage = () => {
  const { id } = useParams();

  const [customer, customerLoading] = useFetch({
    api: "user",
    parameter: id,
  });
  if (customerLoading) {
    return <Loading />;
  }
  return (
    <AdminRouteAuth>
      <section className=" py-10">
        <CustomerUpdateForm customer={customer} />
      </section>
    </AdminRouteAuth>
  );
};

export default CustomerUpdatePage;

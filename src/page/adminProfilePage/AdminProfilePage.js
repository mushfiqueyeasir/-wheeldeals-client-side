import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/shared/Loading/Loading";
import CustomerUpdateForm from "../../components/customerUpdateForm/CustomerUpdateForm";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";

const AdminProfilePage = () => {
  const { user } = useContext(GLOBAL_CONTEXT);

  const [customer, customerLoading] = useFetch({
    api: "user",
    parameter: user.id,
  });
  if (customerLoading) {
    return <Loading />;
  }

  return (
    <section className=" py-10">
      <CustomerUpdateForm customer={customer} />
    </section>
  );
};

export default AdminProfilePage;

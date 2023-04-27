import React from "react";
import CustomerCreateForm from "../../components/customerAddForm/CustomerAddForm";
import AdminRouteAuth from "../../auth/adminRouteAUth";

const AddCustomerPage = () => {
  return (
    <AdminRouteAuth>
      <section className=" py-10">
        <CustomerCreateForm />
      </section>
    </AdminRouteAuth>
  );
};

export default AddCustomerPage;

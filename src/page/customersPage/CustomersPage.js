import React, { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import CustomerTableHead from "./CustomerTableHead";
import CustomerTableRow from "./CustomerTableRow";
import AdminRouteAuth from "../../auth/adminRouteAUth";

const CustomersPage = () => {
  const { customers } = useContext(GLOBAL_CONTEXT);
  return (
    <AdminRouteAuth>
      <section className="py-10">
        <div className="overflow-x-auto w-full lg:w-[80%] xl:w-[50%] mx-auto">
          <table className="table w-full">
            {/* head */}
            <CustomerTableHead />

            <tbody>
              {customers.map((item) => (
                <CustomerTableRow key={item.id} customer={item} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminRouteAuth>
  );
};

export default CustomersPage;

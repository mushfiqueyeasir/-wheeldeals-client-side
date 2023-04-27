import React, { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import OrdersTableHead from "./OrdersTableHead";
import OrderTableRow from "./OrderTableRow";
import AdminRouteAuth from "../../auth/adminRouteAUth";

const OrderListPage = () => {
  const { orders } = useContext(GLOBAL_CONTEXT);
  return (
    <AdminRouteAuth>
      <section className="py-10">
        <div className="overflow-x-auto w-full lg:w-[80%] xl:w-[60%] mx-auto">
          <table className="table w-full">
            {/* head */}
            <OrdersTableHead />

            <tbody>
              {orders.map((item) => (
                <OrderTableRow key={item.id} order={item} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminRouteAuth>
  );
};

export default OrderListPage;

import React, { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import OrdersTableHead from "./OrdersTableHead";
import OrderTableRow from "./OrderTableRow";
import UserRouteAuth from "../../auth/userRouteAuth";

const UserOrderListPage = () => {
  const { userOrder } = useContext(GLOBAL_CONTEXT);
  return (
    <UserRouteAuth>
      <section className="py-10">
        <div className="overflow-x-auto w-full lg:w-[80%] xl:w-[60%] mx-auto">
          <table className="table w-full">
            {/* head */}
            <OrdersTableHead />

            <tbody>
              {userOrder.map((item) => (
                <OrderTableRow key={item.id} order={item} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </UserRouteAuth>
  );
};

export default UserOrderListPage;

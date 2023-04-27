import React, { useContext } from "react";
import AdminRouteAuth from "../../auth/adminRouteAUth";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import { RiMotorbikeFill } from "react-icons/ri";
import AnalyticsCard from "./AnalyticsCard";
import { IoIosPeople } from "react-icons/io";
import { MdPendingActions } from "react-icons/md";
import { GrCompliance, GrStorage } from "react-icons/gr";

const Analytics = () => {
  const { product, customers, orders } = useContext(GLOBAL_CONTEXT);

  let totalStock = 0;
  product.forEach((element) => {
    totalStock = totalStock + element.productStock;
  });

  const completeOrders = orders.filter((item) => item.delivered === true);
  const pendingOrders = orders.filter((item) => item.delivered === false);

  return (
    <AdminRouteAuth>
      <section className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          <AnalyticsCard
            icon={<RiMotorbikeFill />}
            number={product.length}
            name={"Products Category"}
          />
          <AnalyticsCard
            icon={<GrStorage />}
            number={totalStock}
            name={"Total Stock"}
          />
          <AnalyticsCard
            icon={<IoIosPeople />}
            number={customers.length}
            name={"customers"}
          />
          <AnalyticsCard
            icon={<MdPendingActions />}
            number={orders.length}
            name={"orders"}
          />
          <AnalyticsCard
            icon={<MdPendingActions />}
            number={pendingOrders.length}
            name={"Pending orders"}
          />

          <AnalyticsCard
            icon={<GrCompliance />}
            number={completeOrders.length}
            name={"Complete orders"}
          />
        </div>
      </section>
    </AdminRouteAuth>
  );
};

export default Analytics;

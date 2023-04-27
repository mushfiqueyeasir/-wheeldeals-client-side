import React from "react";

const OrdersTableHead = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th className="hidden lg:table-cell">Phone Number</th>
        <th className="hidden lg:table-cell">quantity</th>
        <th>price</th>
        <th className="hidden lg:table-cell">Status</th>
        <th>action</th>
      </tr>
    </thead>
  );
};

export default OrdersTableHead;

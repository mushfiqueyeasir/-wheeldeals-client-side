import React from "react";

const CustomerTableHead = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th className="hidden lg:table-cell">Phone Number</th>
        <th>action</th>
      </tr>
    </thead>
  );
};

export default CustomerTableHead;

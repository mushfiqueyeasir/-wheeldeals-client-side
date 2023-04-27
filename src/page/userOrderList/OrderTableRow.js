import React, { useContext } from "react";
import Swal from "sweetalert2";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import { TiCancel } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { update } from "../../hooks/update";
import { deleteItem } from "../../hooks/delete";

const OrderTableRow = ({ order }) => {
  const { ordersRefetch, productRefetch, userOrderRefetch } =
    useContext(GLOBAL_CONTEXT);
  const {
    _id,
    productName,
    productImage,
    userPhoneNumber,
    delivered,
    productQuantity,
    productPrice,
  } = order;

  const handleDelivered = () => {
    order.delivered = true;
    update({
      endPoint: "order/unique",
      id: _id,
      data: order,
      refetch: userOrderRefetch,
    });
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem({
          api: "order/unique",
          id: _id,
          refetch: ordersRefetch,
          additionalRefetch: productRefetch,
          additionalRefetch2: userOrderRefetch,
        });
      }
    });
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={productImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold capitalize hidden lg:block">
              {productName}
            </div>
          </div>
        </div>
      </td>
      <td className="hidden lg:table-cell">+880 {userPhoneNumber}</td>
      <td className="hidden lg:table-cell">{productQuantity}</td>
      <td>{productQuantity * productPrice}</td>
      <td className="hidden lg:table-cell">
        <div
          className={`w-[3px] p-1 border-2 rounded-full ml-4 ${
            delivered
              ? "border-green-400 bg-green-400"
              : "border-red-400 bg-red-400"
          } `}
        />
      </td>
      <td className="text-white">
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={handleDelete}
            className={`p-2 rounded-full ${
              delivered ? "cursor-not-allowed bg-gray-300" : "bg-red-500 "
            }`}
            disabled={delivered}
          >
            <TiCancel />
          </button>
          <button
            type="button"
            onClick={handleDelivered}
            className={`bg-blue-500 p-2 rounded-full ${
              delivered && "cursor-not-allowed bg-gray-300"
            }`}
            disabled={delivered}
          >
            <TbTruckDelivery />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default OrderTableRow;

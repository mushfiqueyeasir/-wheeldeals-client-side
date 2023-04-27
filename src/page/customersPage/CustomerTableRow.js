import React, { useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { BsPen } from "react-icons/bs";
import Swal from "sweetalert2";
import { deleteItem } from "../../hooks/delete";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import { Link } from "react-router-dom";

const CustomerTableRow = ({ customer }) => {
  const { customerRefetch } = useContext(GLOBAL_CONTEXT);
  const { id, name, imgURL, phoneNumber, role } = customer;
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
        deleteItem({ api: "user", id: id, refetch: customerRefetch });
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={imgURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold capitalize">{name}</div>
            <div className="text-sm opacity-50  capitalize">{role}</div>
          </div>
        </div>
      </td>
      <td className="hidden lg:table-cell">
        +880 {phoneNumber}
        <br />
      </td>
      <td className="text-white">
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 p-2 rounded-full"
          >
            <HiOutlineTrash />
          </button>
          <Link
            to={`/dashboard/customers/${id}`}
            type="button"
            className="bg-blue-500 p-2 rounded-full"
          >
            <BsPen />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default CustomerTableRow;

import React, { useContext } from "react";
import { BsPen } from "react-icons/bs";
import { HiOutlineTrash } from "react-icons/hi";
import { RiMotorbikeFill } from "react-icons/ri";
import { deleteItem } from "../../hooks/delete";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductManageCard = ({ product }) => {
  const { productRefetch } = useContext(GLOBAL_CONTEXT);
  const { _id, productName, productImage, productStock } = product;

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
        deleteItem({ api: "product", id: _id, refetch: productRefetch });
      }
    });
  };

  return (
    <div className="h-60 bg-base-100 border shadow-xl relative overflow-hidden rounded-lg">
      <img src={productImage} alt="Shoes" className="cardImage " />
      <button
        type="button"
        onClick={handleDelete}
        className="bg-red-500 text-white text-2xl p-2 rounded-full absolute top-2 right-2 cursor-pointer z-50"
      >
        <HiOutlineTrash />
      </button>
      <Link
        to={`/dashboard/product/${_id}`}
        className="bg-blue-500 text-white text-2xl p-2 rounded-full absolute top-2 left-2 cursor-pointer z-50"
      >
        <BsPen />
      </Link>

      <div className="absolute bottom-2 left-2 z-50">
        <h2 className="font-[900] text-2xl  capitalize text-white">
          {productName}
        </h2>
        <h2 className="font-[900] text-xl  capitalize text-white flex items-start gap-x-2">
          <RiMotorbikeFill className="text-2xl" />
          {productStock}
        </h2>
      </div>
    </div>
  );
};

export default ProductManageCard;

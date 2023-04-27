import React, { useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { deleteItem } from "../../hooks/delete";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";

const CartCard = ({ item }) => {
  const { cartRefetch } = useContext(GLOBAL_CONTEXT);
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
        deleteItem({ api: "cart", id: item._id, refetch: cartRefetch });
      }
    });
  };
  const { productImage, productName, productQuantity, productPrice } = item;
  return (
    <article className="grid grid-cols-4  items-center">
      <div className="flex items-center gap-x-2">
        <img
          src={productImage}
          alt=""
          className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-md lg:rounded-3xl"
        />
        <h1 className="font-semibold text-xl hidden lg:block">{productName}</h1>
      </div>

      <div>
        <h2 className="flex justify-center items-center gap-x-1">
          <RiMotorbikeFill />
          {productQuantity}
        </h2>
      </div>
      <div className="">
        <h2 className="flex justify-center items-center gap-x-1">
          <MdAttachMoney />
          {productPrice * productQuantity}
        </h2>
      </div>
      <div className="flex justify-center items-center gap-x-2">
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 p-2 rounded-full text-white"
        >
          <HiOutlineTrash />
        </button>
      </div>
    </article>
  );
};

export default CartCard;

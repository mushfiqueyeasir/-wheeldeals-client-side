import React, { useContext, useState } from "react";

import {
  imageUploadDiv,
  imageUploadBox,
  file,
  layer,
  iconsStyle,
  profileImageCX,
  uploadLogoText,
  fileNameCX,
} from "./styledClass";
import { toast } from "react-toastify";

import PostLoading from "./PostLoading";
import { convertImage } from "../../utility/imageResize";
import CustomInputField from "../customInputField/CustomInputField";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import { update } from "../../hooks/update";

const ProductEditForm = ({ product }) => {
  const {
    _id,
    productName,
    productImage,
    productBrand,
    productDescription,
    productPrice,
    productStock,
  } = product[0];
  const { productRefetch } = useContext(GLOBAL_CONTEXT);
  const [loading, setLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);
  const [fileName, setFileName] = useState(productName.slice(0, 8) + ".png");
  const [newProductImage, setProductImage] = useState(productImage);

  const handleProfileImage = (event) => {
    const size = event.target.files[0].size;
    if (size < 5000000) {
      setFileName(event.target.files[0].name);
      convertImage(event.target.files[0], setProductImage, setLoading);
    } else {
      toast.error("Max image limit 5MB!", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      productImage: newProductImage,
      productName: event.target.productName.value,
      productBrand: event.target.productBrand.value,
      productDescription: event.target.productDescription.value,
      productStock: parseInt(event.target.productStock.value),
      productPrice: parseInt(event.target.productPrice.value),
    };

    update({
      endPoint: "product",
      id: _id,
      data: data,
      refetch: productRefetch,
      loading: setPostLoading,
      imageThumbReset: setProductImage,
      fileNameReset: setFileName,
    });
  };

  return (
    <>
      <div
        className={`container mx-auto py-10  md:w-3/4 lg:w-3/6 px-3 ${
          postLoading && "opacity-30"
        }`}
      >
        <form onSubmit={handleSubmit}>
          <div className={profileImageCX}>
            <div className={imageUploadDiv}>
              <div
                className={imageUploadBox}
                style={{
                  backgroundImage: `url(${productImage})`,
                }}
              >
                {loading ? (
                  <PostLoading small={true} />
                ) : (
                  <input
                    type="file"
                    name="photo"
                    className={file}
                    onChange={handleProfileImage}
                    formEncType="multipart/form-data"
                    accept="image/*"
                  />
                )}
                <div className={layer(productImage)}>
                  <div className={iconsStyle}>
                    {!loading && (
                      <img
                        src="https://mez.ink/mezink-web/_next/static/images/invoice/imageLogo.png"
                        alt="uploadImageThumbnail"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className={uploadLogoText}>Product Image</h2>
              <h2 className={fileNameCX}>
                {fileName
                  ? fileName.length <= 15
                    ? fileName
                    : fileName.slice(0, 8) +
                      "..." +
                      fileName.slice(fileName.indexOf("."))
                  : "No file chosen"}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInputField
              type="text"
              label={"Product Name"}
              name="productName"
              required={true}
              spanFull={true}
              widthHalf={true}
              defaultValue={productName}
            />
            <CustomInputField
              type="text"
              label={"Product Brand"}
              name="productBrand"
              required={true}
              spanFull={true}
              widthHalf={true}
              defaultValue={productBrand}
            />
            <CustomInputField
              type="text"
              label={"Product Description"}
              name="productDescription"
              required={true}
              spanFull={true}
              textArea={true}
              defaultValue={productDescription}
            />

            <CustomInputField
              type="number"
              label={"Product Stock"}
              name="productStock"
              required={true}
              min={0}
              defaultValue={productStock}
            />
            <CustomInputField
              type="number"
              label={"Product Price"}
              name="productPrice"
              required={true}
              min={0}
              defaultValue={productPrice}
            />
          </div>
          <div className="pt-6  flex justify-center">
            <button
              disabled={loading}
              type="submit"
              className={`btn btn-outline`}
            >
              submit
            </button>
          </div>
        </form>
      </div>
      {postLoading && <PostLoading />}
    </>
  );
};

export default ProductEditForm;

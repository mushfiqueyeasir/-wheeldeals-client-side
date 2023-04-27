import { toast } from "react-toastify";
import { getToken } from "../utility/token";

export const create = ({
  endPoint,
  data,
  refetch,
  additionalRefetch,
  additionalRefetch2,
  additionalRefetch3,
  reset,
  loading,
  imageThumbReset,
  fileNameReset,
  message,
}) => {
  if (loading) {
    loading(true);
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getToken(),
  };

  fetch(`${process.env.REACT_APP_API_URL}/${endPoint}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
      }
      return response.json();
    })
    .then((response) => {
      if (reset) {
        reset();
      }
      toast.success(message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch((error) => {
      toast.error(error.message, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .finally(() => {
      if (refetch) {
        refetch();
      }
      if (additionalRefetch) {
        additionalRefetch();
      }
      if (additionalRefetch2) {
        additionalRefetch2();
      }
      if (additionalRefetch3) {
        additionalRefetch3();
      }
      if (imageThumbReset) {
        imageThumbReset(null);
      }
      if (fileNameReset) {
        fileNameReset("No file chosen");
      }
      if (loading) {
        loading(false);
      }
    });
};

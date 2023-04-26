import { toast } from "react-toastify";

export const create = ({
  endPoint,
  data,
  refetch,
  userRefetch,
  reset,
  loading,
  imageThumbReset,
  fileNameReset,
}) => {
  loading(true);

  const headers = {
    "Content-Type": "application/json",
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
      toast.success("Event Created!", {
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
      console.log("Error:", error);
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
      if (reset) {
        reset();
      }
      if (refetch) {
        refetch();
      }
      if (userRefetch) {
        userRefetch();
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

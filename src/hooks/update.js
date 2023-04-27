import { toast } from "react-toastify";
import { getToken } from "../utility/token";

export const update = ({
  endPoint,
  id,
  data,
  refetch,
  userRefetch,
  loading,
}) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(data),
  };

  fetch(`${process.env.REACT_APP_API_URL}/${endPoint}/${id}`, requestOptions)
    .then((response) => {
      if (response.ok) {
        if (refetch) {
          refetch();
        }
        if (userRefetch) {
          userRefetch();
        }
        toast.success(`Update Successful!`, {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .catch((error) => {
      console.log(error);
      toast
        .error(error.message, {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        .finally(() => {
          if (loading) {
            loading(false);
          }
        });
    });
};

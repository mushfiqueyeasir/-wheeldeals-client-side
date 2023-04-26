import { toast } from "react-toastify";
import { login } from "./login";

export const signUp = ({ data, userRefetch }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  fetch(`${process.env.REACT_APP_API_URL}/user`, {
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
    .then((response) => {})
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
      login({ data: data, userRefetch: userRefetch });
    });
};

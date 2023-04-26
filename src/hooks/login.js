import { toast } from "react-toastify";

export const login = ({ data, userRefetch }) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(`${process.env.REACT_APP_API_URL}/user/login`, requestOptions)
    .then(async (response) => {
      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");
      const data = isJson && (await response.json());

      if (!response.ok) {
        const error = data.error;
        return Promise.reject(error);
      } else {
        sessionStorage.setItem("wheelDeals", data.data.token);
        userRefetch();
        const success = data.message;
        toast.success(success, {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    })
    .catch((error) => {
      toast.error(error, {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
};

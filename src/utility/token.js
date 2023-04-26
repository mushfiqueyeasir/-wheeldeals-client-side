export const getToken = () => {
  const tempToken = sessionStorage.getItem("wheelDeals")
    ? sessionStorage.getItem("wheelDeals")
    : "asdf";
  return tempToken;
};

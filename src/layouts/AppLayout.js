import { createContext } from "react";
import Footer from "../components/shared/footer/Footer";
import NavBar from "../components/shared/navBar/NavBar";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useSession from "../hooks/useSession";
export const GLOBAL_CONTEXT = createContext();

const AppLayout = ({ children }) => {
  const location = useLocation().pathname.slice(0, 10);

  const [product, productLoading] = useFetch({ api: "product" });
  const [user, userLoading, userRefetch] = useSession();
  if (productLoading || userLoading) {
    return <h2>loading....</h2>;
  }

  const value = { user, userRefetch, product };

  return (
    <GLOBAL_CONTEXT.Provider value={value}>
      {location !== "/dashboard" && (
        <>
          <NavBar />
          <main className="min-h-[63.8vh]">{children}</main>
          <Footer />
        </>
      )}
    </GLOBAL_CONTEXT.Provider>
  );
};

export default AppLayout;

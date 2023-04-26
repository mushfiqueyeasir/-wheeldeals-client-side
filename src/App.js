import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./page/homePage/HomePage";
import ProductPage from "./page/productPage/ProductPage";
import ContactUsPage from "./page/contactUsPage/ContactUsPage";
import JoinPage from "./page/joinPage/JoinPage";
import Dashboard from "./page/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <AppLayout>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer />
      </AppLayout>
    </div>
  );
}

export default App;

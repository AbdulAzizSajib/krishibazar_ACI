import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayOut = () => {
  const location = useLocation();
  const isNavbarFooter = location.pathname === "/login";
  return (
    <div>
      {isNavbarFooter || <Navbar />}

      <div className="min-h-screen container mx-auto">
        <Outlet></Outlet>
      </div>
      {isNavbarFooter || <Footer />}
    </div>
  );
};

export default MainLayOut;

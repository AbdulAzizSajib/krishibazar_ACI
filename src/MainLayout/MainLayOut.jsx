import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayOut = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="min-h-screen container mx-auto border-2">
        <Outlet></Outlet>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayOut;

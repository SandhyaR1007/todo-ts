import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;

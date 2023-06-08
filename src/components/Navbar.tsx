import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { token, logout } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div className=" fixed left-0 right-0 bg-blue-200 shadow-sm border-b py-4 px-10 z-10 flex justify-between items-center">
      <Link to="/">
        <h1 className="font-semibold text-2xl text-gray-700">TODO APP</h1>
      </Link>
      <div className="flex items-center gap-5">
        <Link to="/userProfile">
          <CgProfile className="text-3xl cursor-pointer " />
        </Link>
        <button
          className="py-2 px-4 bg-blue-500 text-sm text-white rounded-md hover:bg-blue-600 transition"
          onClick={logout}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;

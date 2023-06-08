import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { token, logout } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="fixed left-0 right-0 bg-gray-50 shadow-sm border-b py-4 px-10 z-10 flex justify-between items-center">
      <h1>TODO APP</h1>
      <button
        className="py-2 px-4 bg-indigo-500 text-sm text-white rounded-md hover:bg-indigo-600 transition"
        onClick={logout}
      >
        Log out
      </button>
    </div>
  );
};

export default Navbar;

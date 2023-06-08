import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import { checkDisable } from "../utils";
import Loader from "../components/Loader";

const Login = () => {
  const navigate = useNavigate();
  const { token, login, loading, error } = useAuthContext();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const disabledBtn =
    checkDisable(loginInfo.email) < 1 ||
    checkDisable(loginInfo.password) < 1 ||
    loading;

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login(loginInfo);
  };
  return (
    <div className="w-screen h-screen bg-indigo-50 flex items-center justify-center font-sans">
      <form
        className="bg-white shadow-md p-10 rounded-md flex flex-col  gap-4"
        onSubmit={handleSubmit}
      >
        <header className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-700">
            You must Log In to Continue
          </h1>
          <p className="text-gray-300 text-sm py-1">
            Lorem ipsum dolor,beatae deserunt quia soluta,quia soluta
          </p>
        </header>
        <div className="text-red-600">{error}</div>
        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">Email </span>
          <input
            type="email"
            name="email"
            placeholder="test@gmail.com"
            className="p-3 border-[1.5px] border-slate-100 rounded-md bg-gray-50 outline-none"
            onChange={handleInputChange}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">Password</span>
          <input
            type="password"
            placeholder="Test1234test"
            name="password"
            className="p-3 border-[1.5px] border-slate-100 rounded-md bg-gray-50"
            onChange={handleInputChange}
          />
        </label>
        <button
          type="submit"
          className="bg-indigo-500 p-1 rounded-md shadow-sm uppercase text-white font-semibold hover:bg-indigo-600 transition-colors delay-100  flex justify-center items-center h-12"
          disabled={disabledBtn}
        >
          {loading ? <Loader /> : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export { Login };

import { Route, Routes } from "react-router";
import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

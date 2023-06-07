import { Route, Routes } from "react-router";
import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import RequiresAuth from "./routes/RequiresAuth.js";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route element={<RequiresAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import { Route, Routes } from "react-router";
import { Login } from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import RequiresAuth from "./routes/RequiresAuth.js";
import SharedLayout from "./routes/SharedLayout.js";
import UserProfile from "./pages/UserProfile.js";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route element={<RequiresAuth />}>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/userProfile" element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const logIn = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {logIn || <NavBar></NavBar>}
      <Outlet></Outlet>
      {logIn || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;

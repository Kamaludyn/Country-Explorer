import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const MainLayout = ({ theme, handleThemeSwitch }) => {
  return (
    <>
      <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Outlet />
    </>
  );
};

export default MainLayout;

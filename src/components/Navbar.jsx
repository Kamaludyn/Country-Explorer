import { FaMoon } from "react-icons/fa";

const Navbar = ({ handleThemeSwitch }) => {
  return (
    <nav className="w-full mx-auto my-0 fixed top-0 z-20">
      <section className="bg-lightBg dark:bg-darkElements text-lightText font-semibold dark:text-darkText-LightElements flex justify-between items-center px-10 md:px-24 py-6 shadow-md">
        <h1>Where in the World?</h1>
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleThemeSwitch}
        >
          <FaMoon className="text-lightText dark:text-darkText-LightElements mt-1" />
          <p className="ml-1">Dark Mode</p>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

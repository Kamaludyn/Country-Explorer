import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText-LightElements w-full h-screen flex flex-col items-center justify-center mt-10">
      <FaExclamationTriangle className="text-9xl" />
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p className="text-2xl">This page does not exist</p>
      <p className="text-3xl font-semibold">
        <Link to="/">Go Back</Link>
      </p>
    </section>
  );
};

export default NotFoundPage;

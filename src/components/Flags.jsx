import Flag from "./Flag";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const Flags = ({ loading, filteredCountries, handleCountryClick }) => {
  return (
    <section className="bg-lightBg dark:bg-darkBg h-full">
      {loading ? (
        <Spinner />
      ) : (
        <section className="bg-lightBg dark:bg-darkBg px-12  md:px-24 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredCountries.map((country, index) => (
              <Link key={index} to="/detail">
                <Flag
                  country={country}
                  handleCountryClick={() => handleCountryClick(country)}
                />
              </Link>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default Flags;


const Flag = ({ country, handleCountryClick }) => {
  return (
    <div
      className="bg-light dark:bg-darkElements md:w-full rounded-lg shadow-[0_0_5px_4px_rgba(0,0,0,0.04)] cursor-pointer my-4"
      onClick={handleCountryClick}
    >
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="w-full h-48 md:h-40 object-center rounded-t-md"
      />
      <div className="p-4 leading-6">
        <h2 className="text-lg text-lightText dark:text-darkText-LightElements font-bold mb-2">
          {country.name.common}
        </h2>
        <p className="text-lightText dark:text-darkText-LightElements">
          Population: {country.population.toLocaleString()}
        </p>
        <p className="text-lightText dark:text-darkText-LightElements">
          Region: {country.region}
        </p>
        <p className="text-lightText dark:text-darkText-LightElements">
          Capital: {country.capital}
        </p>
      </div>
    </div>
  );
};

export default Flag;

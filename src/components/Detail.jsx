import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Detail = ({
  countryCodeMapping,
  setSelectedCountry,
  selectedCountry,
}) => {
  const navigate = useNavigate();

  // Extract the currency code from the selected country's currencies object
  const currencyCode = Object.keys(selectedCountry.currencies)[0];
  // Get the currency details using the extracted currency code
  const currency = selectedCountry.currencies[currencyCode];

  // Extract the native name keys from the selected country's name object
  const nativeNames = Object.keys(selectedCountry.name.nativeName)[0];
  // Get the native name details using the extracted native name key
  const nativeName = selectedCountry.name.nativeName[nativeNames];

  // Function to close the detail view and go back to the previous view
  const closeDetails = () => {
    setSelectedCountry(false);
    navigate("/");
  };
  return (
    <section className="bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText-LightElements w-full h-full pt-8 mt-16 md:pt-14 px-12 md:px-24">
      <div
        className="flex justify-between w-fit py-1.5 px-7 mb-12 rounded-md shadow-[0_0_5px_4px_rgba(0,0,0,0.08)] cursor-pointer"
        onClick={closeDetails}
      >
        <FaArrowLeft className="text-lg self-center" />
        <button className="ml-5">Back</button>
      </div>
      <div
        className="
       md:flex"
      >
        <img
          src={selectedCountry.flags.png}
          alt={`${selectedCountry.name.common}`}
          className="md:h-80 md:w-4/5 min-h-fit w-full"
        />
        <div className="w-full md:h-screen md:ml-20 mt-8 ">
          <h2 className="text-xl md:text-2xl md:mb-5 font-extrabold">
            <strong>{selectedCountry.name.common}</strong>
          </h2>
          <div className="md:flex md:justify-between ">
            <div className="leading-8 ">
              <p className="mt-1">
                <span className="font-semibold">Native Name: </span>
                {nativeName.official || "null"}
              </p>
              <p>
                <span className="font-semibold">Population: </span>{" "}
                {selectedCountry.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span>{" "}
                {selectedCountry.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>{" "}
                {selectedCountry.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>{" "}
                {selectedCountry.capital}
              </p>
            </div>
            <div className=" leading-8 ">
              <p>
                <span className="font-semibold">Top Level Domain </span>{" "}
                {selectedCountry.tld[0]}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>{" "}
                {currency.name}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>{" "}
                {Object.values(selectedCountry.languages).join(", ")}
              </p>
            </div>
          </div>
          <div className=" leading-8 md:flex  mt-6 ">
            <p className="mb-3 md:mb-0 md:mr-5 font-semibold self-center ">
              Border Countries:{" "}
            </p>
            {selectedCountry.borders.slice(0, 3).map((border, index) => (
              <span
                key={index}
                className="dark:bg-darkElements py-0.5 px-3 mr-3 shadow-[0_0_4px_2px_rgba(0,0,0,0.05)]"
              >
                {countryCodeMapping[border]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;

import React from "react";
import SearchAndFilter from "./SearchAndFilter";
import Flags from "./Flags";

const Home = ({
  handleRegionChange,
  region,
  searchTerm,
  handleSearchChange,
  loading,
  filteredCountries,
  handleCountryClick,
}) => {
  return (
    <section className="font-Nunito dark:bg-darkBg bg-lightBg w-full">
      <SearchAndFilter
        onRegionChange={handleRegionChange}
        region={region}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />
      <Flags
        selectedRegion={region}
        searchTerm={searchTerm}
        loading={loading}
        filteredCountries={filteredCountries}
        handleCountryClick={handleCountryClick}
      />
    </section>
  );
};

export default Home;

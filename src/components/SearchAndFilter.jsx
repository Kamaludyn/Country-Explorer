import { FaSearch } from "react-icons/fa";

const SearchAndFilter = ({
  region,
  onRegionChange,
  searchTerm,
  onSearchChange,
}) => {
  // Handle change in the region select input
  const handleRegionChange = (e) => {
    onRegionChange(e.target.value);
  };

  //   Handle change in search input
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };
  return (
    <section className="flex flex-col mb-10 md:flex-row md:justify-between items-center gap-8 px-10 md:px-24 pt-28 ">
      <div className="flex flex-row items-center bg-lightBg dark:bg-darkElements shadow-[0_0_5px_3px_rgba(0,0,0,0.05)] w-full md:w-2/5 py-4 px-6 rounded-lg">
        <FaSearch className="text-lightText text-lg dark:text-darkText-LightElements mr-6 font-medium" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          className="bg-transparent text-lightText dark:text-darkText-LightElements w-full focus:outline-none"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <select
        name="region"
        id="region"
        className="bg-lightBg dark:bg-darkElements text-lightText dark:text-darkText-LightElements w-3/5 self-start md:self-center py-5 px-6 md:w-1/5 rounded-lg shadow-[0_0_5px_3px_rgba(0,0,0,0.05)]"
        // value={region}
        defaultValue={region}
        onChange={handleRegionChange}
      >
        <option value="Region" disabled>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </section>
  );
};

export default SearchAndFilter;

import { useEffect, useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import MainLayout from "./layouts/MainLayout";
import Detail from "./components/Detail";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  // State to manage the theme (light or dark)
  const [theme, setTheme] = useState(() => {
    // Load theme from local storage if available
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // State to manage the selected region for filtering
  const [region, setRegion] = useState("");

  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState("");

  // State to store the list of countries
  const [countries, setCountries] = useState([]);
  // State to handle loading state
  const [loading, setLoading] = useState(false);
  // State to store the currently selected country
  const [selectedCountry, setSelectedCountry] = useState(false);
  // State to map country codes to their names for border country display
  const [countryCodeMapping, setCountryCodeMapping] = useState({});

  // API endpoint to fetch country details with specific fields
  const apiUrl =
    "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,currencies,tld,languages,subregion,borders,cca3";

  // Function to generate a mapping from country code to country name
  const generateCountryCodeMapping = (countries) => {
    const mapping = {};
    countries.forEach((country) => {
      mapping[country.cca3] = country.name.common;
    });
    return mapping;
  };

  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  //  UseEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true
      try {
        const response = await axios.get(apiUrl); // Fetch data from the API
        const countriesData = response.data;
        setCountries(countriesData); // Store fetched countries data in state
        setCountryCodeMapping(generateCountryCodeMapping(countriesData)); // Generate and store country code mapping
      } catch (error) {
        // Error handling
        if (error.response) {
          // Server responded with a status other than 200 range
          console.error("Error response:", error.response);
        } else if (error.request) {
          // Request was made but no response received
          console.error("Error request:", error.request);
        } else {
          // Something else happened in setting up the request
          console.error("Error:", error.message);
        }
      } finally {
        setLoading(false); // Set loading state to false
      }
    };

    fetchData(); // Call the function to fetch data
  }, []); // Empty dependency array ensures this runs once on mount

  // Filter country based on selected region and search term, then shuffle and limit to 20 results
  const filteredCountries = shuffleArray(
    countries
      .filter((country) => !region || country.region === region)
      .filter(
        (country) =>
          !searchTerm ||
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // Handle clicking on a country to show its details
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    // navigate("/login-sign-up")
  };

  // Function to switch the theme between light and dark
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Function to update the region state when a new region is selected
  const handleRegionChange = (selectedRegion) => {
    setRegion(selectedRegion);
  };

  // Function to update the search term state when the search input changes
  const handleSearchChange = (searchInput) => {
    setSearchTerm(searchInput);
  };

  // Apply theme to document and save to local storage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout theme={theme} handleThemeSwitch={handleThemeSwitch} />
        }
      >
        <Route
          index
          element={
            <Home
              handleRegionChange={handleRegionChange}
              region={region}
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              selectedRegion={region}
              loading={loading}
              filteredCountries={filteredCountries}
              handleCountryClick={handleCountryClick}
            />
          }
        />
        <Route
          path="/detail"
          element={
            <Detail
              setSelectedCountry={setSelectedCountry}
              selectedCountry={selectedCountry}
              countryCodeMapping={countryCodeMapping}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;

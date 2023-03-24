import { useEffect, useState } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import CovidApi from "./api/CovidApi"
import "./App.css";
import _ from "lodash";

function App() {
  const [countries, setCountries] = useState([]);
  const [report, setReport] = useState([]);
  const [selectedCountryById, setSelectedCountryById] = useState('');
 
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await CovidApi.getCountries();
      setCountries(_.sortBy(res, 'Country'));
    }
    fetchCountries();
    setSelectedCountryById('vn');
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryById(e.target.value);
  }

  useEffect(() => {
    if (selectedCountryById && countries.length) {
      const { Slug } = countries.find(
        country => country.ISO2.toLowerCase() === selectedCountryById
      );
      const fetchReportByCountry = async () => {
        const res = await CovidApi.getReportByCountry(Slug);
        console.log(res);
        setReport(res);
      }
      fetchReportByCountry();
    }
    
  }, [selectedCountryById, countries])

  return (
    <>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryById} />
      <Highlight report={report} />
      <Summary report={report} />
    </>
  );
}

export default App;

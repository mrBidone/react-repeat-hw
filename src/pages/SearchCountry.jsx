import { Container, CountryList, Heading, Section } from "components";
import Loader from "components/Loader/Loader";
import SearchForm from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchByRegion } from "service/countryApi";

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get("query");

  useEffect(() => {
    if (!region) return;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [region]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {loading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
        {error && <Heading title={error.message} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;

import axios from "axios";
import { Container, CountryList, Heading, Section } from "components";
import Loader from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { getCountries } from "service/countryApi";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
        {error && <Heading title={error.message} />}
      </Container>
    </Section>
  );
};

export default Home;

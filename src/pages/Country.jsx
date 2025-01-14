import {
  Container,
  CountryInfo,
  GoBackBtn,
  Heading,
  Section,
} from "components";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchCountry } from "service/countryApi";

const Country = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { countryId } = useParams();

  const location = useLocation();

  const goBack = useRef(location?.state ?? "/");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current}>Back to Countries</GoBackBtn>
        {country && <CountryInfo {...country} />}
        {error && <Heading title={error.message} bottom />}
      </Container>
    </Section>
  );
};

export default Country;

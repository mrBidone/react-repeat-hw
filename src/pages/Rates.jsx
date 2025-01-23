import { Wave } from "react-animated-text";

import { Container, Heading, Loader, Section } from "components";
import {
  selectBaseCurrency,
  selectError,
  selectLoading,
  selectRates,
} from "reduxState/currency/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLatestSymbolsThunk } from "reduxState/currency/operations";

const Rates = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const baseCurrency = useSelector(selectBaseCurrency);
  const isLoading = useSelector(selectLoading);
  const rates = useSelector(selectRates);

  useEffect(() => {
    dispatch(fetchLatestSymbolsThunk(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={2.0}
            />
          }
        />
        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;

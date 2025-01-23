import {
  Container,
  ExchangeForm,
  ExchangeInfo,
  Heading,
  Loader,
  Section,
} from "components";
import { useSelector } from "react-redux";
import {
  selectError,
  selectExchangeInfo,
  selectLoading,
} from "reduxState/currency/selectors";

const Home = () => {
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const exchangeInfo = useSelector(selectExchangeInfo);

  console.log(exchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        {!isError && !exchangeInfo && (
          <Heading info title="What currencies do you want to exchange?🙂" />
        )}

        {exchangeInfo && <ExchangeInfo {...exchangeInfo} />}

        {isLoading && <Loader />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { Grid, GridItem } from "..";

export const CountryList = ({ countries }) => {
  console.log(countries);
  return (
    <Grid>
      {countries.map(({ id, flag, country }) => {
        return (
          <GridItem key={id}>
            <Link>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

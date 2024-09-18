import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Header = ({ rates }) => {
  const uahPerUsd = rates?.USD ? 1 / rates.USD : 0;
  const uahPerEur = rates?.EUR ? 1 / rates.EUR : 0;

  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <Typography sx={{ marginRight: 2 }}>
            € {uahPerUsd.toFixed(2)} UAH
          </Typography>
          <Typography>$ {uahPerEur.toFixed(2)} UAH</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

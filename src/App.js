import { useState, useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";

import Converter from "./Components/Converter";
import Header from "./Components/Header";

import styles from "./styles";

const App = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      const apiKey = "880a4e31aeac579a1f367aff";
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${apiKey}/latest/UAH`
        );
        const data = await response.json();

        setRates(data.conversion_rates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) {
    return (
      <Box sx={styles.loaderBox}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Header rates={rates} />
      <Converter rates={rates} />
    </>
  );
};

export default App;

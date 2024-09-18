import { useState, useEffect, useCallback } from "react";
import { Stack, Container, Typography } from "@mui/material";

import CurrencyInput from "./CurrencyInput";

import styles from "../../styles";

const Converter = ({ rates }) => {
  const [topAmount, setTopAmount] = useState(1);
  const [topCurrency, setTopCurrency] = useState("USD");
  const [bottomAmount, setBottomAmount] = useState(1);
  const [bottomCurrency, setBottomCurrency] = useState("UAH");
  const [availableCurrencies, setAvailableCurrencies] = useState([]);

  const getConvertedAmount = useCallback(
    (amount, fromCurrency, toCurrency) =>
      (amount * rates[toCurrency]) / rates[fromCurrency],
    [rates]
  );

  useEffect(() => {
    if (rates) {
      setAvailableCurrencies(Object.keys(rates));
      setBottomAmount(getConvertedAmount(1, "USD", "UAH"));
    }
  }, [rates, getConvertedAmount]);

  const handleTopAmountChange = (value) => {
    setTopAmount(value);
    setBottomAmount(getConvertedAmount(value, topCurrency, bottomCurrency));
  };

  const handleTopCurrencyChange = (newCurrency) => {
    setTopCurrency(newCurrency);
    setBottomAmount(getConvertedAmount(topAmount, newCurrency, bottomCurrency));
  };

  const handleBottomAmountChange = (value) => {
    setBottomAmount(value);
    setTopAmount(getConvertedAmount(value, bottomCurrency, topCurrency));
  };

  const handleBottomCurrencyChange = (newCurrency) => {
    setBottomCurrency(newCurrency);
    setTopAmount(getConvertedAmount(bottomAmount, newCurrency, topCurrency));
  };

  return (
    <Container sx={styles.container}>
      <Typography variant="h4" gutterBottom sx={styles.headerText}>
        Currency Converter
      </Typography>
      <Stack spacing={2} sx={styles.currencyInputStack}>
        <CurrencyInput
          amount={topAmount}
          currency={topCurrency}
          availableCurrencies={availableCurrencies}
          onAmountChange={handleTopAmountChange}
          onCurrencyChange={handleTopCurrencyChange}
        />
        <CurrencyInput
          amount={bottomAmount}
          currency={bottomCurrency}
          availableCurrencies={availableCurrencies}
          onAmountChange={handleBottomAmountChange}
          onCurrencyChange={handleBottomCurrencyChange}
        />
      </Stack>
    </Container>
  );
};

export default Converter;

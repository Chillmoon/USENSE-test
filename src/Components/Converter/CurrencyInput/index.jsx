import { TextField, MenuItem, Stack } from "@mui/material";

import styles from "../../../styles";

const CurrencyInput = ({
  amount,
  currency,
  availableCurrencies,
  onAmountChange,
  onCurrencyChange,
}) => (
  <Stack direction="row" spacing={2} sx={styles.currencyInputStack}>
    <TextField
      label="Amount"
      type="number"
      value={amount}
      onChange={(e) => onAmountChange(e.target.value)}
      fullWidth
    />
    <TextField
      select
      label="Currency"
      value={currency}
      onChange={(e) => onCurrencyChange(e.target.value)}
      fullWidth
    >
      {availableCurrencies.map((cur) => (
        <MenuItem key={cur} value={cur}>
          {cur}
        </MenuItem>
      ))}
    </TextField>
  </Stack>
);

export default CurrencyInput;

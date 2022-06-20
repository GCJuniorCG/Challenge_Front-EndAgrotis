import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";

import { FormAgrotis } from "./FormAgrotis";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#34786c",
    },
    success: {
      main: "#4caf50",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FormAgrotis />
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import 'fontsource-roboto';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import MainPage from "./pages/MainPage";

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Dark mode
    background: {
      // default: "#343A40"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        // backgroundColor: "#6C757D",
      }
    },
    MuiButton: {
      root: {
        // backgroundColor: 'red',
      }
    }
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage/>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));

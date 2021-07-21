import React from 'react';
import './App.scss';
import { ThemeProvider } from "styled-components";
import { getTheme } from "./theme";
import { GlobalStyles } from "./global";
import { googleTrackingID } from "./settings";
import ReactGA from "react-ga";
import { Theme } from './enums/Theme';
import Main from './containers/Main';

type State = {
  theme: Theme
}

class App extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {
      theme: Theme.dark
    }
  }

  componentDidMount() {
    if (googleTrackingID) {
      ReactGA.initialize(googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  render() {
    return(
      <ThemeProvider theme={getTheme(this.state.theme)}>
        <GlobalStyles />
        <Main theme={getTheme(this.state.theme)} />
      </ThemeProvider>
    );
  }
}

export default App;
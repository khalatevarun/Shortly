import { ThemeProvider, withTheme } from 'styled-components';
import Hero from './components/Hero/Hero';
import MainInfo from './components/MainInfo/MainInfo';

import * as theme from './global-components/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Hero theme={theme} />
      <MainInfo theme={theme} />
    </ThemeProvider>
  );
};

export default withTheme(App);

import { ThemeProvider, withTheme } from 'styled-components';
import { AppContainer } from './AppContainer';
import Footer1 from './components/Footer1/Footer1';
import Hero from './components/Hero/Hero';
import MainInfo from './components/MainInfo/MainInfo';

import * as theme from './global-components/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Hero />
        <MainInfo />
        <Footer1 />
      </AppContainer>
    </ThemeProvider>
  );
};

export default withTheme(App);

import { ThemeProvider, withTheme } from 'styled-components';
import { AppContainer } from './AppContainer';
import Footer1 from './components/Footer1/Footer1';
import Footer2 from './components/Footer2/Footer2';
import Hero from './components/Hero/Hero';
import MainInfo from './components/MainInfo/MainInfo';
import Navbar from './components/Navbar/Navbar';

import * as theme from './global-components/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar />
        <Hero />
        <MainInfo />
        <Footer1 />
        <Footer2 />
      </AppContainer>
    </ThemeProvider>
  );
};

export default withTheme(App);

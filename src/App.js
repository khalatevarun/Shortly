import { ThemeProvider, withTheme } from 'styled-components';
import Hero from './components/Hero/Hero';

import * as theme from './global-components/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Hero theme={theme} />
    </ThemeProvider>
  );
};

export default withTheme(App);

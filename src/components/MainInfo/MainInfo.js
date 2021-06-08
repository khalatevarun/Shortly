import { useState } from 'react';
import { withTheme } from 'styled-components';
import { MainInfoContainer } from './helper-components/MainInfoContainer';
import MainInput from './MainInput';
import Result from './Result';

const MainInfo = (props) => {
  const [displayResults, setDisplayResults] = useState([]);

  return (
    <MainInfoContainer>
      <MainInput
        displayResults={displayResults}
        setDisplayResults={setDisplayResults}
      />
      <Result displayResults={displayResults} />
    </MainInfoContainer>
  );
};
export default withTheme(MainInfo);

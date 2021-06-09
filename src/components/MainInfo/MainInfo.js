import { useState } from 'react';
import { withTheme } from 'styled-components';
import { MainInfoContainer } from './helper-components/MainInfoContainer';
import MainInput from './MainInput';
import SingleResult from './SingleResult';
import Statistics from './Statistics';

const MainInfo = (props) => {
  const [displayResults, setDisplayResults] = useState([]);

  return (
    <MainInfoContainer>
      <MainInput
        displayResults={displayResults}
        setDisplayResults={setDisplayResults}
      />
      {displayResults &&
        displayResults.map((result) => <SingleResult result={result} />)}
      <Statistics />
    </MainInfoContainer>
  );
};
export default withTheme(MainInfo);

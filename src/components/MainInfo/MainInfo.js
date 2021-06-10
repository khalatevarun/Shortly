import { useState } from 'react';
import { withTheme } from 'styled-components';
import { LoadingIndicator } from '../../global-components/LoadingIndicator';
import { MainInfoContainer } from './helper-components/MainInfoContainer';
import MainInput from './MainInput';
import SingleResult from './SingleResult';
import Statistics from './Statistics';

const MainInfo = (props) => {
  const [displayResults, setDisplayResults] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <MainInfoContainer>
      <MainInput
        displayResults={displayResults}
        setDisplayResults={setDisplayResults}
        setShow={setShow}
      />
      <LoadingIndicator show={show} />
      {displayResults &&
        displayResults.map((result) => <SingleResult result={result} />)}
      <Statistics />
    </MainInfoContainer>
  );
};
export default withTheme(MainInfo);

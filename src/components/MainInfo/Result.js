import { Part1 } from './helper-components/Part1';
import { Part2 } from './helper-components/Part2';
import { ResultContainer } from './helper-components/ResultContainer';

const Result = ({ displayResults }) => {
  return (
    <>
      {displayResults &&
        displayResults.map((result) => (
          <ResultContainer>
            <Part1>{result.orgLink}</Part1>
            <Part2>
              <p>{result.shortLink}</p>
              <button>{result.status}</button>
            </Part2>
          </ResultContainer>
        ))}
    </>
  );
};
export default Result;

import { SqaureButtonCopy } from './helper-components/SqaureButtonCopy';
import { Inner1 } from './helper-components/Inner1';
import { Part1 } from './helper-components/Part1';
import { Part2 } from './helper-components/Part2';
import { ResultContainer } from './helper-components/ResultContainer';
import { Inner2 } from './helper-components/Inner2';

const Result = ({ displayResults }) => {
  return (
    <>
      {displayResults &&
        displayResults.map((result) => (
          <ResultContainer>
            <Part1>{result.orgLink}</Part1>
            <Part2>
              <Inner1>{result.shortLink}</Inner1>
              <Inner2>
                <SqaureButtonCopy>{result.status}</SqaureButtonCopy>
              </Inner2>
            </Part2>
          </ResultContainer>
        ))}
    </>
  );
};
export default Result;

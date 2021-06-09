import { useState } from 'react';
import { HorizontalLine } from './helper-components/HorizontalLine';
import { Inner1 } from './helper-components/Inner1';
import { Inner2 } from './helper-components/Inner2';
import { Part1 } from './helper-components/Part1';
import { Part2 } from './helper-components/Part2';
import { ResultContainer } from './helper-components/ResultContainer';
import { SqaureButtonCopy } from './helper-components/SqaureButtonCopy';

const SingleResult = ({ result }) => {
  const [copy, setCopy] = useState(false);
  const [status, setStatus] = useState(result.status);

  const handleClick = () => {
    setCopy(true);
    setStatus('Copied');
  };
  return (
    <ResultContainer>
      <Part1>{result.orgLink}</Part1>
      <HorizontalLine />
      <Part2>
        <Inner1>{result.shortLink}</Inner1>
        <Inner2>
          <SqaureButtonCopy copy={copy} onClick={handleClick}>
            {status}
          </SqaureButtonCopy>
        </Inner2>
      </Part2>
    </ResultContainer>
  );
};

export default SingleResult;

import { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { InputContainer } from './helper-components/InputContainer';
import { LinkInput } from './helper-components/LinkInput';
import MainInfo from './MainInfo';

const MainInput = () => {
  const [inputLink, setInputLink] = useState();

  const handleInputLinkChange = (event) => {
    setInputLink(event.target.value);
  };

  const submitLink = () => {
    // geet request to display heheheh
  };

  return (
    <InputContainer>
      <LinkInput></LinkInput>
    </InputContainer>
  );
};

export default withTheme(MainInput);

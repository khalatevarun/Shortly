import { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
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
    // <InputContainer>

    // <InputLink>
    // </InputLink>
    // <SquareButton>Shorten it!</SqaureButton>
    // </InputContainer>
    <div>Hello World</div>
  );
};

export default withTheme(MainInput);

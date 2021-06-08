import axios from 'axios';
import { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { SqaureButton } from '../../global-components/SquareButton';
import { InputContainer } from './helper-components/InputContainer';
import { LinkInput } from './helper-components/LinkInput';
import MainInfo from './MainInfo';

const MainInput = ({ displayResults, setDisplayResults }) => {
  const [inputLink, setInputLink] = useState();
  const [inputError, setInputError] = useState(false);
  const handleInputLinkChange = (event) => {
    setInputLink(event.target.value);
  };

  const submitLink = async () => {
    console.log('Cliked');
    console.log(inputLink);
    // geet request to display heheheh

    const { data } = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${inputLink}`,
    );

    setDisplayResults([
      {
        orgLink: data.result.original_link,
        shortLink: data.result.short_link,
        status: 'Copy',
      },
      ...displayResults,
    ]);
  };

  return (
    <InputContainer>
      <LinkInput
        placeholder="Shorten a link here..."
        validationFailed={inputError}
        value={inputLink}
        onChange={handleInputLinkChange}
      />
      <SqaureButton onClick={submitLink}>Shorten it!</SqaureButton>
    </InputContainer>
  );
};

export default withTheme(MainInput);

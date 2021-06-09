import axios from 'axios';
import { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { SubmitButton } from './helper-components/SubmitButton';
import { InputContainer } from './helper-components/InputContainer';
import { LinkInput } from './helper-components/LinkInput';
import { InputDiv } from './helper-components/InputDiv';
import { ErrorDiv } from './helper-components/ErrorDiv';

const MainInput = ({ displayResults, setDisplayResults }) => {
  const [inputLink, setInputLink] = useState();
  const [inputError, setInputError] = useState(false);
  const handleInputLinkChange = (event) => {
    setInputLink(event.target.value);
  };
  const [showError, setShowError] = useState(false);

  const submitLink = async () => {
    console.log('Cliked');
    console.log(inputLink);
    // geet request to display heheheh
    if (inputLink) {
      setShowError(false);
      setInputError(false);
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
    } else {
      console.log('Error');
      setInputError(true);
      setShowError(true);
    }
  };

  return (
    <InputContainer>
      <InputDiv>
        <LinkInput
          placeholder="Shorten a link here..."
          validationFailed={inputError}
          value={inputLink}
          onChange={handleInputLinkChange}
        />
        <ErrorDiv showError={showError}>
          <em>Please add a link</em>
        </ErrorDiv>
      </InputDiv>
      <SubmitButton onClick={submitLink}>Shorten it!</SubmitButton>
    </InputContainer>
  );
};

export default withTheme(MainInput);

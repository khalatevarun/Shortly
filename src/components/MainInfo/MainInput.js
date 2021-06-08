import axios from 'axios';
import { useEffect, useState } from 'react';
import { withTheme } from 'styled-components';
import { SqaureButton } from '../../global-components/SquareButton';
import { InputContainer } from './helper-components/InputContainer';
import { LinkInput } from './helper-components/LinkInput';
import MainInfo from './MainInfo';

const MainInput = () => {
  const [inputLink, setInputLink] = useState();
  const [inputError, setInputError] = useState(false);
  const handleInputLinkChange = (event) => {
    setInputLink(event.target.value);
  };

  const submitLink = async () => {
    console.log('Cliked');
    console.log(inputLink);
    // geet request to display heheheh

    // const { data } = await axios.get(
    //   `https://api.shrtco.de/v2/shorten?url=${inputLink}`,
    // );
    const data = {
      ok: true,
      result: {
        code: 'VIgki3',
        short_link: 'shrtco.de/VIgki3',
        full_short_link: 'https://shrtco.de/VIgki3',
        short_link2: '9qr.de/VIgki3',
        full_short_link2: 'https://9qr.de/VIgki3',
        short_link3: 'shiny.link/VIgki3',
        full_short_link3: 'https://shiny.link/VIgki3',
        share_link: 'shrtco.de/share/VIgki3',
        full_share_link: 'https://shrtco.de/share/VIgki3',
        original_link: 'https://twitter.com/Piyush_eon',
      },
    };
    console.log(data);
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

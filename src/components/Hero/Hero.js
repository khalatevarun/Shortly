import { HeroContainer } from './styled-components/HeroContainer';
import { RoundButton } from '../../global-components/RoundButton';
import { Heading } from './styled-components/Heading';
import working from '../../images/working.svg';
import { Div1 } from './styled-components/Div1';
import { Sub } from './styled-components/Sub';
import { Div2 } from './styled-components/Div2';
import { withTheme } from 'styled-components';

const Hero = (props) => {
  return (
    <HeroContainer>
      <Div1 theme={props.theme}>
        <Heading theme={props.theme}>More than just shorten links</Heading>
        <Sub theme={props.theme}>
          Build you brand's recognition and get detailed insights on how your
          link are performing.
        </Sub>
        <RoundButton theme={props.theme}>Get Started</RoundButton>
      </Div1>
      <Div2 theme={props.theme}>
        <img src={working} alt="working" width="100%" />
      </Div2>
    </HeroContainer>
  );
};

export default withTheme(Hero);

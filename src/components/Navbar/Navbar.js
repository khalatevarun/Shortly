import { RoundButton } from '../../global-components/RoundButton';
import { NavButtons } from './helper-components/NavButtons';
import { NavContainer } from './helper-components/NavContainer';
import { NavDiv } from './helper-components/NavDiv';
import { NavLinks } from './helper-components/NavLinks';
import { NavName } from './helper-components/NavName';

const Navbar = () => {
  return (
    <NavContainer>
      <NavName>Shortly</NavName>
      <NavLinks>
        <NavDiv>Features</NavDiv>
        <NavDiv>Pricing</NavDiv>
        <NavDiv>Resources</NavDiv>
      </NavLinks>
      <NavButtons>
        <NavDiv>Login</NavDiv>
        <RoundButton>Sign Up</RoundButton>
      </NavButtons>
    </NavContainer>
  );
};

export default Navbar;

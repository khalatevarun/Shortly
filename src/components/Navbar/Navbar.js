import { useState } from 'react';
import { RoundButton } from '../../global-components/RoundButton';
import { NavButtons } from './helper-components/NavButtons';
import { NavContainer } from './helper-components/NavContainer';
import { NavDiv } from './helper-components/NavDiv';
import { NavLinks } from './helper-components/NavLinks';
import { NavName } from './helper-components/NavName';
import { NavMenu } from './NavMenu';
import menu from '../../images/menu.png';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

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
      <NavMenu show={show}>
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
        <hr />
        <p>Login</p>
        <RoundButton>Sign Up</RoundButton>
      </NavMenu>
      <img src={menu} onClick={handleClick} alt="menu" width="24px" />
    </NavContainer>
  );
};

export default Navbar;

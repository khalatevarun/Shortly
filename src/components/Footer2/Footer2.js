import { DivHeader } from './helper-components/DivHeader';
import { DivLink } from './helper-components/DivLink';
import { Footer2Container } from './helper-components/Footer2Container';
import { FooterDiv } from './helper-components/FooterDiv';
import { Name } from './helper-components/Name';
import { SocialIcons } from './helper-components/SocialIcons';
import fb from '../../images/fb.svg';
import pr from '../../images/pr.svg';
import twit from '../../images/twit.svg';

import ig from '../../images/ig.svg';

const Footer2 = () => {
  return (
    <Footer2Container>
      <Name>Shortly</Name>
      <FooterDiv>
        <DivHeader>Features</DivHeader>
        <DivLink>Link Shortening</DivLink>
        <DivLink>Branded Links</DivLink>
        <DivLink>Analytics</DivLink>
      </FooterDiv>
      <FooterDiv>
        <DivHeader>Resources</DivHeader>
        <DivLink>Blog</DivLink>
        <DivLink>Developers</DivLink>
        <DivLink>Support</DivLink>
      </FooterDiv>
      <FooterDiv>
        <DivHeader>Company</DivHeader>
        <DivLink>About</DivLink>
        <DivLink>Our Team</DivLink>
        <DivLink>Careers</DivLink>
        <DivLink>Contact</DivLink>
      </FooterDiv>
      <SocialIcons>
        <img src={fb} style={{ marginLeft: '15px' }} />
        <img src={twit} style={{ marginLeft: '15px' }} />
        <img src={pr} style={{ marginLeft: '15px' }} />
        <img src={ig} style={{ marginLeft: '15px' }} />
      </SocialIcons>
    </Footer2Container>
  );
};
export default Footer2;

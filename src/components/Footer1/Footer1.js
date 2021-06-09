import { RoundButton } from '../../global-components/RoundButton';
import { BoostButton } from './helper-components/BoostButton';
import { BoostHead } from './helper-components/BoostHead';
import { Footer1Container } from './helper-components/Footer1Container';

const Footer1 = () => {
  return (
    <Footer1Container>
      <BoostHead>Boost your links today</BoostHead>
      <BoostButton>Get Started</BoostButton>
    </Footer1Container>
  );
};

export default Footer1;

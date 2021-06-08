import { withTheme } from 'styled-components';
import { MainInfoContainer } from './helper-components/MainInfoContainer';
import MainInput from './MainInput';

const MainInfo = (props) => {
  return (
    <MainInfoContainer>
      <MainInput />
    </MainInfoContainer>
  );
};
export default withTheme(MainInfo);

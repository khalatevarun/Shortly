import { withTheme } from 'styled-components';
import { MainInfoContainer } from './helper-components/MainInfoContainer';
import MainInput from './MainInput';
import Result from './Result';

const MainInfo = (props) => {
  return (
    <MainInfoContainer>
      <MainInput />
      <Result />
    </MainInfoContainer>
  );
};
export default withTheme(MainInfo);

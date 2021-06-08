import { withTheme } from 'styled-components';
import { MainInfoContainer } from './helper-components/MainInfoContainer';

const MainInfo = (props) => {
  return <MainInfoContainer>Hello World</MainInfoContainer>;
};
export default withTheme(MainInfo);

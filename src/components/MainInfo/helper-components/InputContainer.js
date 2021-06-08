import styled from 'styled-components';
import bg from '../../../images/bg-shorten-desktop.svg';

export const InputContainer = styled.div`
  background-image: url('${bg}');
  height: 20vh;
  background-color: ${(props) => props.theme.DarkViolet};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  margin: -90px 30px 90px 30px;
  align-items: center;
  display: flex;
  padding: 0px 60px;
`;

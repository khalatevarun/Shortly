import styled from 'styled-components';
import bg from '../../../images/bg-shorten-desktop.svg';

export const InputContainer = styled.div`
  background-image: url('${bg}');
  height: 18vh;
  background-color: ${(props) => props.theme.DarkViolet};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  margin: -100px 90px 90px 90px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0px 40px;
`;

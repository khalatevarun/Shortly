import styled from 'styled-components';
import boost_desktop from '../../../images/boost_desktop.svg';
export const Footer2Container = styled.div`
  background-color: ${(props) => props.theme.VeryDarkBlue};
  display: flex;
  padding: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;
    text-align: center;
  }
`;

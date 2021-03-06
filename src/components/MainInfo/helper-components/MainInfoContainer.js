import styled from 'styled-components';

export const MainInfoContainer = styled.div`
  padding: 30px 60px;
  background-color: ${(props) => props.theme.Gray};
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    margin: 0px;
    padding: 30px 30px;
  }
`;

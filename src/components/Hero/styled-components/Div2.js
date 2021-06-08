import styled from 'styled-components';

export const Div2 = styled.div`
  margin: 0px -150px 0px 100px;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    margin: 0px;
    padding-left: 400px;
  }
`;

import styled from 'styled-components';

export const Div2 = styled.div`
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    width: 100%;
    padding-left: 100px;
  }
`;

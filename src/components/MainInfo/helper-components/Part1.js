import styled from 'styled-components';

export const Part1 = styled.div`
  flex: 1;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    align-self: flex-start;
    margin: 0px 10px;
  }
`;

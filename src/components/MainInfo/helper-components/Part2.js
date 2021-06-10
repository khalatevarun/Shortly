import styled from 'styled-components';

export const Part2 = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    flex-direction: column;
    align-self: flex-start;
    align-items: stretch;
    margin: 0px 10px;
    width: 100%;
  }
`;

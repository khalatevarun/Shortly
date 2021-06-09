import styled from 'styled-components';

export const Part2 = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    flex-direction: column;
  }
`;

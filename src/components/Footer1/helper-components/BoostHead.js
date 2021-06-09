import styled from 'styled-components';

export const BoostHead = styled.div`
  color: white;
  font-size: 2.5em;
  font-weight: 700;
  margin: 30px;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    font-size: 1.7em;
  }
`;

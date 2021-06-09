import styled from 'styled-components';

export const NavName = styled.div`
  color: ${(props) => props.theme.VeryDarkViolet};
  font-size: 2em;
  flex: 0.3;
  font-weight: 700;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    flex: 0;
  }
`;

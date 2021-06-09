import styled from 'styled-components';

export const NavLinks = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: row;
  flex: 1.5;

  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    display: none;
  }
`;

import styled from 'styled-components';

export const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    display: none;
  }
`;

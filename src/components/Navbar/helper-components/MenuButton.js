import styled from 'styled-components';

export const MenuButton = styled.img`
  src: url(${(props) => props.src});
  width: 24px;
  display: none;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    display: block;
  }
`;

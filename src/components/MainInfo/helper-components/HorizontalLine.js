import styled from 'styled-components';

export const HorizontalLine = styled.hr`
  display: none;
  width: 100%;
  background-color: ${(props) => props.theme.GrayishViolet};
  color: ${(props) => props.theme.GrayishViolet};
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    display: block;
  }
`;

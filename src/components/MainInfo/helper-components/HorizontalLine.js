import styled from 'styled-components';

export const HorizontalLine = styled.div`
  display: none;

  height: 1px;
  background-color: ${(props) => props.theme.GrayishViolet};
  color: ${(props) => props.theme.GrayishViolet};
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    display: block;
    width: 105%;
    margin: 4px 0px;
  }
`;

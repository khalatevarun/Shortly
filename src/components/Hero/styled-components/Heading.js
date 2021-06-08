import styled from 'styled-components';

export const Heading = styled.div`
  font-size: 3.5em;
  font-weight: 700;
  line-height: 1.25;
  color: ${(props) => props.theme.VeryDarkViolet};
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    font-size: 3em;
  }
`;

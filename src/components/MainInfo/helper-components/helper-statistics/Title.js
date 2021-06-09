import styled from 'styled-components';

export const Title = styled.div`
  font-weight: 700;
  font-size: 2.5em;
  color: ${(props) => props.theme.VeryDarkViolet};
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    font-size: 24px;
    margin: 30px -60px;
  }
`;

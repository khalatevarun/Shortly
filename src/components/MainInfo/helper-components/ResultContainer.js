import styled from 'styled-components';

export const ResultContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0px 90px 15px 90px;
  padding: 16px;
  font-size: 0.85em;
  color: ${(props) => props.theme.VeryDarkViolet};
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    flex-direction: column;
    margin: 0px;
    padding: 8px;
    font-size: 0.85em;
  }
`;

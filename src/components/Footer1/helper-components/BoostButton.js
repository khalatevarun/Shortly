import styled from 'styled-components';

export const BoostButton = styled.button`
  background-color: ${(props) => props.theme.Cyan};
  border-radius: 25px;
  font-size: 0.85em;
  padding: 8px 20px;
  border: none;
  font-weight: 700;
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.LightCyan};
  }
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    padding: 15px 30px;
    font-size: 1em;
  }
`;

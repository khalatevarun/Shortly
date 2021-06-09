import styled from 'styled-components';

export const BoostButton = styled.button`
  background-color: ${(props) => props.theme.Cyan};
  border-radius: 25px;
  padding: 15px 25px;
  font-size: 0.85em;
  border: none;
  font-weight: 700;
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.LightCyan};
  }
`;

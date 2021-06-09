import styled from 'styled-components';

export const SqaureButtonCopy = styled.button`
  background-color: ${(props) => {
    return props.copy ? props.theme.DarkViolet : props.theme.Cyan;
  }} !important;
  border-radius: 4px;
  font-size: 0.85em;
  padding: 8px 20px;
  border: none;
  font-weight: 700;
  color: white;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.LightCyan};
  }
`;

import styled from 'styled-components';

export const RoundButton = styled.button`
  background-color: ${(props) => props.theme.Cyan};
  border-radius: 25px;
  font-size: 0.85em;
  padding: 8px 20px;
  border: none;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

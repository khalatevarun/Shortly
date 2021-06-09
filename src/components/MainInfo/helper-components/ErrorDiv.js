import styled from 'styled-components';

export const ErrorDiv = styled.div`
  color: ${(props) => (props.showError ? props.theme.Red : 'transparent')};
  font-size: 0.75em;

  background-color: transparent;
`;

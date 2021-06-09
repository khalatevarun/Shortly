import styled from 'styled-components';

export const LinkInput = styled.input`
  padding: 0.9em;
  background-color: transparent;
  background: white;
  border: 2px solid;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;

  border-color: ${(props) =>
    props.validationFailed ? props.theme.Red : 'white'};
  &::placeholder {
    color: ${(props) =>
      props.validationFailed ? props.theme.Red : props.theme.Grayish};
  }
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    margin-right: 0px;
    width: auto;
    margin-bottom: 30px;
  }
`;

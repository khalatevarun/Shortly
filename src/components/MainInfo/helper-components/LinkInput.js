import styled from 'styled-components';

export const LinkInput = styled.input`
  padding: 0.95em;
  margin-right: 20px;
  background: white;
  border: 2px solid;
  border-radius: 3px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  width: 80%;
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

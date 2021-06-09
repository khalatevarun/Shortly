import styled from 'styled-components';

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 18px 10px 0px 0px;
  width: 80%;

  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    margin-right: 0px;
    width: auto;
    margin-bottom: 30px;
  }
`;

import styled from 'styled-components';

export const Chain = styled.div`
  display: flex;
  align-items: inherit;
  &:nth-child(1) {
    margin-top: 30px;
  }
  & :nth-child(2) {
    margin-top: 100px;
  }
  & :nth-child(3) {
    margin-top: 200px;
  }
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    flex-direction: column;
    &:nth-child(1) {
      margin-top: 60px;
    }
    & :nth-child(2) {
      margin-top: 60px;
    }
    & :nth-child(3) {
      margin-top: 60px;
    }
  }
`;

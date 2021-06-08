import styled from 'styled-components';

export const Div1 = styled.div`
  margin: 50px 100px 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    margin: 15px 0px;
    align-items: center;
  }
`;

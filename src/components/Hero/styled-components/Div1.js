import styled from 'styled-components';

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px 100px;
  align-items: baseline;

  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    align-items: center;
    margin: 25px;
  }
`;

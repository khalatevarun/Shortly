import styled from 'styled-components';

export const Sub = styled.div`
  font-size: 1.05em;
  width: 70%;
  margin: 15px 0px;
  color: ${(props) => props.theme.Grayish};
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    font-size: 1.15em;
    width: auto;
    text-align: center;
  }
`;

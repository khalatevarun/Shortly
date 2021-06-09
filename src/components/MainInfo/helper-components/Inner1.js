import styled from 'styled-components';

export const Inner1 = styled.div`
  margin: 0px 8px;
  color: ${(props) => props.theme.Cyan};
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    margin: 10px 0px;
  }
`;

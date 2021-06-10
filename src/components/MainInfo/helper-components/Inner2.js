import styled from 'styled-components';

export const Inner2 = styled.div`
  margin: 0px 8px;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    margin: 4px 0px;
  }
`;

import styled from 'styled-components';

export const Part1 = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  max-lines: 1;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    align-self: flex-start;
    margin: 0px 10px;
    width: 95%;
  }
`;

import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 90px 0px;

  align-items: center;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
  }
`;

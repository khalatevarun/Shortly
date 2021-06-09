import styled from 'styled-components';

export const Box = styled.div`
  width: 300px;
  margin: 30px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    align-items: center;
  }
`;

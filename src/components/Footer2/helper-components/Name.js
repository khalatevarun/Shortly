import styled from 'styled-components';

export const Name = styled.div`
  color: white;
  font-size: 2em;
  font-weight: 700;
  flex: 0.5;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    margin-bottom: 30px;
  }
`;

import styled from 'styled-components';

export const CyanHorizontal = styled.div`
  width: 60%;
  height: 6px;
  position: absolute;
  margin-top: 400px;
  background-color: ${(props) => props.theme.Cyan};
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    height: 60%;
    width: 6px;
  }
`;

import styled from 'styled-components';

export const SubTitle = styled.div`
  color: ${(props) => props.theme.GrayishViolet};
  text-align: center;
  margin-bottom: 30px;
  width: 40%;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    width: auto;
  }
`;

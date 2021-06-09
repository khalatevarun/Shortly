import styled from 'styled-components';

export const Image = styled.div`
  background-image: url(${(props) => props.image});
  width: 60px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: 30px;
  border-radius: 100px;
  margin: -30px 0px 0px 15px;
  background-position: center;
  background-color: ${(props) => props.theme.DarkViolet};
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    margin: -30px 0px 0px 0px;
  }
`;

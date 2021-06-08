import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 60px;
  height: 60vh;
  width: 100vw;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    flex-direction: column-reverse;

    align-items: center;
    height: max-content;
  }
`;

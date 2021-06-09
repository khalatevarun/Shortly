import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 160px;

  align-items: center;
  @media (max-width: ${(props) => props.theme.mobile_breakpoint}) {
    margin: 30px;
    justify-content: space-between;
  }
`;

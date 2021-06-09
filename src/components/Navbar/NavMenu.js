import styled from 'styled-components';

export const NavMenu = styled.div`
  flex-direction: column;
  background-color: ${(props) => props.theme.DarkViolet};
  margin: 15px 0px;
  position: absolute;
  top: 60px;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 72%;
  color: white;
  align-self: center;
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;

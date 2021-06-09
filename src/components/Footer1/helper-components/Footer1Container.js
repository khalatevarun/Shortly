import styled from 'styled-components';
import boost_desktop from '../../../images/boost_desktop.svg';
export const Footer1Container = styled.div`
  background-image: url(${boost_desktop});
  background-color: ${(props) => props.theme.DarkViolet};
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;

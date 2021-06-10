import styled from 'styled-components';
import loader from '../images/loader.svg';

export const LoadingIndicator = styled.div`
  background-image: url(${loader});
  height: 100px;
  width: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  align-self: center;
  margin: auto;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

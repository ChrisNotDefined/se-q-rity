import styled, { keyframes } from "styled-components";

const SpinKf = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SpinImg = styled.img`
  height: ${props => props.style_height || '5em'};
  animation: ${SpinKf} .8s infinite;
`;

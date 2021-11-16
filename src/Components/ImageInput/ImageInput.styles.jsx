import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  position: relative;
  box-shadow: #0008 0 0 1em;
  border-radius: 99em;
  cursor: pointer;

  ::after {
    opacity: 0;
    transition: opacity 200ms;
    content: "+";
    user-select: none;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 3em;
    padding: 1em;
    inset: 0;
    background-color: #000a;
    border-radius: inherit;
  }

  :hover::after {
    opacity: 1;
  }
`;

export const HTMLInput = styled.input`
  display: none;
`;

export const ImageBtn = styled.input`
  display: block;
  width: 10em;
  height: 10em;
  object-fit: cover;
  border-radius: inherit;
`;

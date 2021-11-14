import styled from "styled-components"

export const Input = styled.input`
  font-size: 1em;
  border: solid #141d48e2;
  padding: 0.5em;
  border-radius: 0.3em;
  transition: box-shadow 200ms;

  :focus {
    outline: none;
  }

  :hover, :focus {
    box-shadow: #fffa 0 0 0px 2px;
  }
`;

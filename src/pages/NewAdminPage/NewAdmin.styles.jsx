import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 20em;
  margin: auto;
  gap: 1em;

  label {
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 0.5em;
    }
  }

  button {
    width: 80%;
    margin: auto;
  }
`;

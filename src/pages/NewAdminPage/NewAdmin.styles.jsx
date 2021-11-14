import styled from "styled-components";

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 20em;
  min-height: 100%;
  margin: 2em auto;
`;

export const InputsContainer = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

export const ButtonsContainer = styled.div`
  margin-top: auto;
  margin-bottom: 5em;
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  button {
    width: 80%;
    margin: auto;
  }
`;

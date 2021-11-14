import styled from "styled-components";

export const ErrorMsg = styled.span`
  margin-top: 0.4em;
  font-weight: normal;
  font-size: 0.8em;
  background-color: #112556AA;
  color: #73b9fc;
  padding: 0.4em;
  border-radius: 0.4em;
`;

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 25em;
  min-height: 100%;
  margin: 2em auto;
`;

export const InputsContainer = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1em;
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

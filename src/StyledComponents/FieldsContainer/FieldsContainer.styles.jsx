import styled from "styled-components";

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1em;
  > label {
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: column;

    > input {
      margin-top: 0.5em;
    }
  }
`;

export const ErrorMsg = styled.span`
  margin-top: 0.4em;
  font-weight: normal;
  font-size: 0.8em;
  background-color: #112556aa;
  color: #73b9fc;
  padding: 0.4em;
  border-radius: 0.4em;
`;

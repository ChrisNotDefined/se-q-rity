import styled from "styled-components";
import { FieldsContainer } from "../../StyledComponents/FieldsContainer";

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 25em;
  min-height: 100%;
  margin: 2em auto;

  & > ${FieldsContainer} {
    margin: auto 0;
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

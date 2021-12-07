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
    margin: 0 0 auto;
  }
`;

export const ButtonsContainer = styled.div`
  margin: auto 0;
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 2em;

  button {
    width: 80%;
    margin: auto;
  }
`;
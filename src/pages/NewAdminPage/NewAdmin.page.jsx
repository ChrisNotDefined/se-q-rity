import React from "react";
import { Button } from "../../StyledComponents/Button";
import { Input } from "../../StyledComponents/Input";
import { ButtonsContainer, FormContainer, InputsContainer } from "./NewAdmin.styles";

export default function NewAdmin() {
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submit admin");
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <div style={{backgroundColor: "blue", height: "120px"}}></div>
      <InputsContainer>
        <label>
          Correo Electrónico
          <Input placeholder={"Correo electrónico"} type="email" />
        </label>
        <label>
          Contraseña
          <Input placeholder={"Contraseña"} type="password" />
        </label>
        <label>
          Repetir contraseña
          <Input placeholder={"Repetir Contraseña"} type="password" />
        </label>
      </InputsContainer>
      <ButtonsContainer>
        <Button type="submit">Registrar Administrador</Button>
        <Button type="button">Volver</Button>
      </ButtonsContainer>
    </FormContainer>
  );
}

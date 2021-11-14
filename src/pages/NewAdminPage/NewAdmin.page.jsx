import React from "react";
import { Button } from "../../StyledComponents/Button";
import { Input } from "../../StyledComponents/Input";
import { FormContainer } from "./NewAdmin.styles";



export default function NewAdmin() {

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submit admin');
  }

  return (
    <div>
      <FormContainer onSubmit={onFormSubmit}>
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
        <Button type="submit">Registrar Administrador</Button>
        <Button type="button">Volver</Button>
      </FormContainer>
    </div>
  );
}

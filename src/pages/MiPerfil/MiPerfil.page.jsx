import React from "react";
import { Button } from "../../StyledComponents/Button";
import { FieldsContainer } from "../../StyledComponents/FieldsContainer";
import { Input } from "../../StyledComponents/Input";
import { ButtonsContainer, FormContainer } from "./MiPerfil.styles";

export default function MiPerfil() {
  return (
    <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <div style={{ backgroundColor: "blue", height: "120px" }}></div>
      <ButtonsContainer>
        <Button type="button">Mi Perfil</Button>
        <Button type="button">Mapa</Button>
      </ButtonsContainer>
      <FieldsContainer>
      <label>
          Buscar colono
          <Input
            placeholder={"Inserta busqueda de colono"}
          />
      </label>
      <Button type="button">Nuevo Colono</Button>
      </FieldsContainer>
      <Button type="button">Nuevo Administrador</Button>
    </FormContainer>
  );
}

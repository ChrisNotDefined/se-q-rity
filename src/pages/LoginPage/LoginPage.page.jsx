import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../StyledComponents/Button";
import { Input } from "../../StyledComponents/Input";
import { ButtonsContainer, ErrorMsg, FormContainer, InputsContainer } from "./Login.styles";

export default function Login() {
  const {
    login,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <div style={{ backgroundColor: "blue", height: "120px" }}></div>
      <InputsContainer>
        <label>
          Nombre de Usuario
          <Input
            placeholder={"Nombre de Usuario"}
            {...login("name", {
              required: "Username is required"
            })}
          />
          {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
        </label>
        <label>
          Contraseña
          <Input
            placeholder={"Contraseña"}
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                message: "Incorrect Password",
              },
            })}
          />
          {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
        </label>
      </InputsContainer>
      <ButtonsContainer>
        <Button type="submit">Iniciar Sesión</Button>
        <Button type="button">Registrarse</Button>
      </ButtonsContainer>
    </FormContainer>
  );
}

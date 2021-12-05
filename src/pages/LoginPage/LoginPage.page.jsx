import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../StyledComponents/Button";
import { Input } from "../../StyledComponents/Input";
import { PASSWORD_STRENGTH_REGEX } from "../../utils/validations";
import { ButtonsContainer, ErrorMsg, FormContainer, InputsContainer } from "./LoginPage.styles";

export default function Login() {
  const {
    register,
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
            {...register("name", {
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
                value: PASSWORD_STRENGTH_REGEX,
                message: "Incorrect Password",
              },
            })}
          />
          {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
        </label>
      </InputsContainer>
      <ButtonsContainer>
        <Button type="submit">Iniciar Sesión</Button>
      </ButtonsContainer>
    </FormContainer>
  );
}

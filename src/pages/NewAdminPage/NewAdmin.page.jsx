import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../StyledComponents/Button";
import { Input } from "../../StyledComponents/Input";
import { EMAIL_VALIDATION_REGEX, PASSWORD_STRENGTH_REGEX } from "../../utils/validations";
import { ButtonsContainer, ErrorMsg, FormContainer, InputsContainer } from "./NewAdmin.styles";

export default function NewAdmin() {
  const {
    register,
    handleSubmit,
    getValues,
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
          Correo Electrónico
          <Input
            placeholder={"Correo electrónico"}
            {...register("email", {
              required: "Email is required",
              pattern: { value: EMAIL_VALIDATION_REGEX, message: "Not a valid email" },
            })}
          />
          {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
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
                message: "Password must have at least 6 chars and contain lower, upper and symbols",
              },
            })}
          />
          {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
        </label>
        <label>
          Repetir contraseña
          <Input
            placeholder={"Repetir Contraseña"}
            type="password"
            {...register("repPass", {
              required: 'Password is required',
              validate: (value) => value === getValues("password") || "Passwords must match",
            })}
          />
          {errors.repPass && <ErrorMsg>{errors.repPass?.message}</ErrorMsg>}
        </label>
      </InputsContainer>
      <ButtonsContainer>
        <Button type="submit">Registrar Administrador</Button>
        <Button type="button">Volver</Button>
      </ButtonsContainer>
    </FormContainer>
  );
}

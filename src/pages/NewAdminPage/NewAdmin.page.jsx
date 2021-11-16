import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../StyledComponents/Button";
import { ErrorMsg, FieldsContainer } from "../../StyledComponents/FieldsContainer";
import { Input } from "../../StyledComponents/Input";
import { EMAIL_VALIDATION_REGEX, PASSWORD_STRENGTH_REGEX } from "../../utils/validations";
import { ButtonsContainer, FormContainer } from "./NewAdmin.styles";

export default function NewAdmin() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm();

  const [pwd, rpwd] = watch(["password", "repPass"]);

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <div style={{ backgroundColor: "blue", height: "120px" }}></div>
      <FieldsContainer>
        <label>
          Correo Electrónico
          <Input
            placeholder={"Correo electrónico"}
            {...register("email", {
              required: "El email es requerido",
              pattern: { value: EMAIL_VALIDATION_REGEX, message: "Email inválido" },
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
              required: "La contraseña es requerida",
              pattern: {
                value: PASSWORD_STRENGTH_REGEX,
                message:
                  "La contraseña debe tener un minimo de 6 caracteres, mayúsculas, minúsculas y simbolos",
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
              required: "La contraseña es requerida",
              validate: (value) =>
                value === getValues("password") || "Las contraseñas no coinciden",
            })}
          />
          {errors.repPass && pwd !== rpwd && <ErrorMsg>las contraseñas no coinciden</ErrorMsg>}
        </label>
      </FieldsContainer>
      <ButtonsContainer>
        <Button type="submit">Registrar Administrador</Button>
        <Button type="button">Volver</Button>
      </ButtonsContainer>
    </FormContainer>
  );
}

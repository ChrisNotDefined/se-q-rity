import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import SeqrityLogo from "../../Components/SeqrityLogo";
import Spinner from "../../Components/Spinner";
import { Button } from "../../StyledComponents/Button";
import { ErrorMsg, FieldsContainer } from "../../StyledComponents/FieldsContainer";
import { Input } from "../../StyledComponents/Input";
import { registerAdmin } from "../../utils/api";
import { EMAIL_VALIDATION_REGEX, PASSWORD_STRENGTH_REGEX } from "../../utils/validations";
import { ButtonsContainer, FormContainer } from "./NewAdmin.styles";

export default function NewAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [pwd] = watch(["password", "repPass"]);
  const [fetching, setFetching] = useState(false);
  const navigate = useNavigate();

  const onFormSubmit = async (data) => {
    setFetching(true);
    const result = await registerAdmin(data.email, data.password);
    if (!result.error) {
      reset();
    }
    setFetching(false);
  };

  return (
    <>
      <SeqrityLogo />
      <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
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
                deps: ["password"],
                validate: (value) => value === pwd || "Las contraseñas no coinciden",
              })}
            />
            {errors.repPass && <ErrorMsg>{errors.repPass?.message}</ErrorMsg>}
          </label>
        </FieldsContainer>
        <ButtonsContainer>
          {!fetching && (
            <>
              <Button type="submit">Registrar Administrador</Button>
              <Button type="button" onClick={() => navigate("/")}>
                Volver
              </Button>
            </>
          )}
          {fetching && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Spinner height="3em" />
            </div>
          )}
        </ButtonsContainer>
      </FormContainer>
    </>
  );
}

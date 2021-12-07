import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SeqrityLogo from "../../Components/SeqrityLogo";
import Spinner from "../../Components/Spinner";
import { loginAction, useAuthContext } from "../../Providers/Auth.provider";
import { Button } from "../../StyledComponents/Button";
import { Input } from "../../StyledComponents/Input";
import { login } from "../../utils/api";
import { EMAIL_VALIDATION_REGEX } from "../../utils/validations";
import { ButtonsContainer, ErrorMsg, FormContainer, InputsContainer } from "./LoginPage.styles";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [, dispatch] = useAuthContext();
  const [isFetching, setIsFetching] = useState(false);

  const onFormSubmit = async (data) => {
    try {
      setIsFetching(true);
      const res = await login(data.email, data.pass);
      const loginToken = res?.data.token;
      setIsFetching(false);
      dispatch(loginAction(loginToken));
    } catch (error) {
      setIsFetching(false);
      console.error(error);
    }
  };

  return (
    <>
      <SeqrityLogo />
      <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
        <InputsContainer>
          <label>
            Email
            <Input
              placeholder={"Email"}
              {...register("email", {
                required: "Escriba su correo electrónico",
                pattern: {
                  value: EMAIL_VALIDATION_REGEX,
                  message: "Verifica que sea un correo válido",
                },
              })}
            />
            {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}
          </label>
          <label>
            Contraseña
            <Input
              placeholder={"Contraseña"}
              type="password"
              {...register("pass", {
                required: "Escriba su contraseña",
              })}
            />
            {errors.pass && <ErrorMsg>{errors.pass?.message}</ErrorMsg>}
          </label>
        </InputsContainer>
        <ButtonsContainer>
          {isFetching && (
            <div style={{ padding: "0.5em", display: "flex", justifyContent: "center" }}>
              <Spinner height="5em" />
            </div>
          )}
          {!isFetching && (
            <Button type="submit" disabled={isFetching}>
              Iniciar Sesión
            </Button>
          )}
        </ButtonsContainer>
      </FormContainer>
    </>
  );
}

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../../Components/Spinner";
import { loginAction, useAuthContext } from "../../Providers/Auth.provider";
import { Button } from "../../StyledComponents/Button";
import { Input } from "../../StyledComponents/Input";
import { login } from "../../utils/api";
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
    <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
      <div style={{ backgroundColor: "blue", height: "120px" }}></div>
      <InputsContainer>
        <label>
          Email
          <Input
            placeholder={"Email"}
            {...register("email", {
              required: "Escriba su correo electrónico",
            })}
          />
          {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}
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
          {errors.password && <ErrorMsg>{errors.password?.message}</ErrorMsg>}
        </label>
      </InputsContainer>
      <ButtonsContainer>
        {isFetching && (
          <div style={{padding: "0.5em", display: "flex", justifyContent: "center"}}>
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
  );
}

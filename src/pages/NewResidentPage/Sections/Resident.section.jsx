import { useFormContext } from "react-hook-form";
import { FormArea, FormImgContainer } from "../NewResident.styles";
import ImageInput from "../../../Components/ImageInput";
import { ErrorMsg, FieldsContainer } from "../../../StyledComponents/FieldsContainer";
import { Input } from "../../../StyledComponents/Input";
import styled from "styled-components";
import { EMAIL_VALIDATION_REGEX, TELEPHONE_REGEX } from "../../../utils/validations";

const ResidentArea = styled(FormArea)`
  grid-area: main;
`;

export default function ResidentSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <ResidentArea>
      <h3>Residente</h3>
      <FormImgContainer>
        <ImageInput />
      </FormImgContainer>
      <FieldsContainer>
        <label>
          Nombre
          <Input
            {...register("residentName", {
              required: "Escriba el nombre del residente",
            })}
          />
          {errors.residentName && <ErrorMsg>{errors.residentName?.message}</ErrorMsg>}
        </label>
        <label>
          Apellidos
          <Input
            {...register("residentLastName", {
              required: "Escriba los apellidos del residente",
            })}
          />
          {errors.residentLastName && <ErrorMsg>{errors.residentLastName?.message}</ErrorMsg>}
        </label>
        <label>
          Número Residencia
          <Input
            {...register("residenceNumber", {
              required: "Escriba el número de la residencia",
              pattern: {
                value: /^\d*$/g,
                message: "El valor debe ser un número válido",
              },
            })}
          />
          {errors.residenceNumber && <ErrorMsg>{errors.residenceNumber?.message}</ErrorMsg>}
        </label>
        <label>
          Número telefónico
          <Input
            {...register("residentTel", {
              required: "Escriba el teléfono del residente",
              pattern: {
                value: TELEPHONE_REGEX,
                message: "Debes ser un teléfono válido",
              },
            })}
          />
          {errors.residentTel && <ErrorMsg>{errors.residentTel?.message}</ErrorMsg>}
        </label>
        <label>
          Correo electrónico
          <Input
            type="email"
            {...register("residentEmail", {
              required: "Escriba el correo del residente",
              pattern: {
                value: EMAIL_VALIDATION_REGEX,
                message: "Debe ser un correo válido",
              },
            })}
          />
          {errors.residentEmail && <ErrorMsg>{errors.residentEmail?.message}</ErrorMsg>}
        </label>
      </FieldsContainer>
    </ResidentArea>
  );
}

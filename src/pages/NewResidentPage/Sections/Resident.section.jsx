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
      <div style={{ position: "sticky", top: '1em' }}>
        <h3>Residente</h3>
        <FormImgContainer>
          <ImageInput onSelected={(file) => {
          register(`fotografia`, {
            value: file
          })
        }}/>
        </FormImgContainer>
        <FieldsContainer>
          <label>
            Nombre
            <Input
              {...register("nombre", {
                required: "Escriba el nombre del residente",
              })}
            />
            {errors.nombre && <ErrorMsg>{errors.nombre?.message}</ErrorMsg>}
          </label>
          <label>
            Apellidos
            <Input
              {...register("apellidos", {
                required: "Escriba los apellidos del residente",
              })}
            />
            {errors.apellidos && <ErrorMsg>{errors.apellidos?.message}</ErrorMsg>}
          </label>
          <label>
            Número Residencia
            <Input
              {...register("residencia", {
                required: "Escriba el número de la residencia",
                pattern: {
                  value: /^\d*$/g,
                  message: "El valor debe ser un número válido",
                },
              })}
            />
            {errors.residencia && <ErrorMsg>{errors.residencia?.message}</ErrorMsg>}
          </label>
          <label>
            Número telefónico
            <Input
              {...register("telefono", {
                required: "Escriba el teléfono del residente",
                pattern: {
                  value: TELEPHONE_REGEX,
                  message: "Debes ser un teléfono válido",
                },
              })}
            />
            {errors.telefono && <ErrorMsg>{errors.telefono?.message}</ErrorMsg>}
          </label>
          <label>
            Correo electrónico
            <Input
              type="email"
              {...register("correo", {
                required: "Escriba el correo del residente",
                pattern: {
                  value: EMAIL_VALIDATION_REGEX,
                  message: "Debe ser un correo válido",
                },
              })}
            />
            {errors.correo && <ErrorMsg>{errors.correo?.message}</ErrorMsg>}
          </label>
        </FieldsContainer>
      </div>
    </ResidentArea>
  );
}

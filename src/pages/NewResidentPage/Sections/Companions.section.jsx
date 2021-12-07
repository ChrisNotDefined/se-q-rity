import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import ImageInput from "../../../Components/ImageInput";
import { ErrorMsg, FieldsContainer } from "../../../StyledComponents/FieldsContainer";
import { Input } from "../../../StyledComponents/Input";
import { TELEPHONE_REGEX } from "../../../utils/validations";
import {
  AddBtnContainer,
  AddButton,
  FormArea,
  FormCollection,
  FormImgContainer,
  FormSection,
  RemoveButton,
} from "../NewResident.styles";

function CompanionForm({ onRemove, idx }) {
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext();

  const formErrors = errors?.companions && errors.companions[idx];

  // Remove from the form state before unmount
  const handleRemove = () => {
    unregister(`companions.${idx}`);
    onRemove?.();
  };

  return (
    <FormSection>
      <FormImgContainer>
        <ImageInput onSelected={(file) => {
          register(`companions.${idx}.fotografia`, {
            value: file
          })
        }}/>
        <RemoveButton type="button" onClick={handleRemove}>
          <i className="fas fa-trash"></i>
        </RemoveButton>
      </FormImgContainer>
      <FieldsContainer>
        <label>
          Nombre
          <Input
            {...register(`companions.${idx}.nombre`, {
              required: "Escriba el nombre del acompañante",
            })}
          />
          {formErrors?.nombre && <ErrorMsg>{formErrors.nombre?.message}</ErrorMsg>}
        </label>
        <label>
          Apellidos
          <Input
            {...register(`companions.${idx}.apellidos`, {
              required: "Escriba los apellidos del acompañante",
            })}
          />
          {formErrors?.apellidos && <ErrorMsg>{formErrors.apellidos?.message}</ErrorMsg>}
        </label>
        <label>
          Teléfono
          <Input
            {...register(`companions.${idx}.telefono`, {
              required: "Teléfono requerido",
              pattern: {
                value: TELEPHONE_REGEX,
                message: "No es un teléfono válido",
              },
            })}
          />
          {formErrors?.telefono && <ErrorMsg>{formErrors.telefono?.message}</ErrorMsg>}
        </label>
      </FieldsContainer>
    </FormSection>
  );
}

const CompanionsArea = styled(FormArea)`
  grid-area: comp;
`;

export default function CompanionsSection() {
  const [companions, setCompanions] = useState([]);

  const removeCompanion = (index) => {
    setCompanions((c) => [...c.slice(0, index), ...c.slice(index + 1)]);
  };

  const addCompanion = () => {
    setCompanions((c) => [...c, `Item-${Date.now()}`]);
  };

  return (
    <CompanionsArea>
      <h3>Acompañantes</h3>
      <FormCollection>
        {companions.map((comp, index) => (
          <CompanionForm key={comp} idx={comp} onRemove={() => removeCompanion(index)} />
        ))}
        <AddBtnContainer>
          <AddButton type="button" onClick={addCompanion}>
            <i className="fas fa-user-plus"></i>
          </AddButton>
        </AddBtnContainer>
      </FormCollection>
    </CompanionsArea>
  );
}

import React, { useState } from "react";
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

function PersonnelForm({ onRemove, idx }) {
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext();

  const formErrors = errors?.personnel && errors.personnel[idx];

  // Remove from the form state before unmount
  const handleRemove = () => {
    unregister(`personnel.${idx}`);
    onRemove?.();
  };

  return (
    <FormSection>
      <FormImgContainer>
        <ImageInput />
        <RemoveButton type="button" onClick={handleRemove}>
          <i className="fas fa-trash"></i>
        </RemoveButton>
      </FormImgContainer>
      <FieldsContainer>
        <label>
          Nombre
          <Input
            {...register(`personnel.${idx}.name`, {
              required: "Nombre requerido",
            })}
          />
          {formErrors?.name && <ErrorMsg>{formErrors.name?.message}</ErrorMsg>}
        </label>
        <label>
          Teléfono
          <Input
            {...register(`personnel.${idx}.phone`, {
              required: "Teléfono requerido",
              pattern: {
                value: TELEPHONE_REGEX,
                message: "Teléfono inválido",
              },
            })}
          />
          {formErrors?.phone && <ErrorMsg>{formErrors.phone?.message}</ErrorMsg>}
        </label>
        <label>
          Servicio
          <Input
            {...register(`personnel.${idx}.service`, {
              required: "Especifique el servicio",
            })}
          />
          {formErrors?.service && <ErrorMsg>{formErrors.service?.message}</ErrorMsg>}
        </label>
        <label>
          Horario de trabajo
          <Input
            placeholder="Lun a Vie de 10am a 6pm"
            {...register(`personnel.${idx}.schedule`, {
              required: "Especifique el horario de trabajo",
            })}
          />
          {formErrors?.schedule && <ErrorMsg>{formErrors.schedule?.message}</ErrorMsg>}
        </label>
      </FieldsContainer>
    </FormSection>
  );
}

const PersonnelArea = styled(FormArea)`
  grid-area: work;
`;

export default function PersonnelSection() {
  const [personnel, setPersonnel] = useState([]);

  const addPersonnel = () => {
    setPersonnel((p) => [...p, `Item-${Date.now()}`]);
  };

  const removePersonnel = (index) => {
    setPersonnel((p) => [...p.slice(0, index), ...p.slice(index + 1)]);
  };

  return (
    <PersonnelArea>
      <h3>Personal doméstico</h3>
      <FormCollection>
        {personnel.map((p, idx) => {
          return <PersonnelForm key={p} idx={p} onRemove={() => removePersonnel(idx)} />;
        })}
        <AddBtnContainer>
          <AddButton type="button" onClick={addPersonnel}>
            <i className="fas fa-user-plus"></i>
          </AddButton>
        </AddBtnContainer>
      </FormCollection>
    </PersonnelArea>
  );
}

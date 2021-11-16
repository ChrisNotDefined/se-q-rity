import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import ImageInput from "../../../Components/ImageInput";
import { FieldsContainer } from "../../../StyledComponents/FieldsContainer";
import { Input } from "../../../StyledComponents/Input";
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
  const { register, unregister } = useFormContext();

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
          <Input {...register(`personnel.${idx}.name`)} />
        </label>
        <label>
          Teléfono
          <Input {...register(`personnel.${idx}.phone`)} />
        </label>
        <label>
          Servicio
          <Input {...register(`personnel.${idx}.service`)} />
        </label>
        <label>
          Dias de trabajo
          <Input placeholder="Lun a Vie de 10am a 6pm" {...register(`personnel.${idx}.service`)} />
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
    setPersonnel((p) => [...p, Date.now()]);
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

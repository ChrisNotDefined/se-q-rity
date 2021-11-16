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

function PetForm({ onRemove, idx }) {
  const { register, unregister } = useFormContext();

  // Remove from the form state before unmount
  const handleRemove = () => {
    unregister(`pets.${idx}`);
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
          <Input placeholder="Nombre" {...register(`pets.${idx}.name`)} />
        </label>
        <label>
          Especie y Raza
          <Input placeholder="Perro Labrador" {...register(`pets.${idx}.species`)} />
        </label>
        <label>
          Edad
          <Input {...register(`pets.${idx}.age`)} />
        </label>
      </FieldsContainer>
    </FormSection>
  );
}

const PetsArea = styled(FormArea)`
  grid-area: pet;
`;

export default function PetsSection() {
  const [pets, setPets] = useState([]);

  const addPet = () => {
    setPets((p) => [...p, Date.now()]);
  };

  const removePet = (index) => {
    setPets((p) => [...p.slice(0, index), ...p.slice(index + 1)]);
  };

  return (
    <PetsArea>
      <h3>Mascotas</h3>
      <FormCollection>
        {pets.map((p, idx) => {
          return <PetForm key={p} idx={p} onRemove={() => removePet(idx)} />;
        })}
        <AddBtnContainer>
          <AddButton type="button" onClick={addPet}>
            <i className="fas fa-user-plus"></i>
          </AddButton>
        </AddBtnContainer>
      </FormCollection>
    </PetsArea>
  );
}

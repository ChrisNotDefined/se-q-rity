import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import ImageInput from "../../../Components/ImageInput";
import { FieldsContainer, ErrorMsg } from "../../../StyledComponents/FieldsContainer";
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
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext();

  const formErrors = errors?.pets && errors.pets[idx];

  // Remove from the form state before unmount
  const handleRemove = () => {
    unregister(`pets.${idx}`);
    onRemove?.();
  };

  return (
    <FormSection>
      <FormImgContainer>
        <ImageInput onSelected={(file) => {
          register(`pets.${idx}.fotografia`, {
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
            placeholder="Nombre"
            {...register(`pets.${idx}.nombre`, {
              required: "Nombre requerido",
            })}
          />
          {formErrors?.name && <ErrorMsg>{formErrors.name?.message}</ErrorMsg>}
        </label>
        <label>
          Especie y Raza
          <Input
            placeholder="Perro Labrador"
            {...register(`pets.${idx}.especie`, {
              required: "Especie requerida",
            })}
          />
          {formErrors?.species && <ErrorMsg>{formErrors.species?.message}</ErrorMsg>}
        </label>
        <label>
          Edad
          <Input
            {...register(`pets.${idx}.edad`, {
              required: "Edad requerida",
              pattern: {
                value: /^\d*$/,
                message: "El valor debe ser un número",
              },
            })}
          />
          {formErrors?.age && <ErrorMsg>{formErrors.age?.message}</ErrorMsg>}
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
    setPets((p) => [...p, `Item-${Date.now()}`]);
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

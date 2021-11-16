import { useState } from "react";
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

function CompanionForm({ onRemove, idx }) {
  const { register, unregister } = useFormContext();

  // Remove from the form state before unmount
  const handleRemove = () => {
    unregister(`companions.${idx}`);
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
          <Input placeholder="Nombre" {...register(`companions.${idx}.name`)} />
        </label>
        <label>
          Apellidos
          <Input placeholder="Apellidos" {...register(`companions.${idx}.lastName`)} />
        </label>
        <label>
          Teléfono
          <Input {...register(`companions.${idx}.number`)} />
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
    setCompanions((c) => [...c, Date.now()]);
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

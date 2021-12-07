import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import SeqrityLogo from "../../Components/SeqrityLogo";
import { Button } from "../../StyledComponents/Button";
import { uploadAllResidentData } from "../../utils/new_resident";
import CompanionsSection from "./Sections/Companions.section";
import PersonelSection from "./Sections/Personnel.section";
import PetsSection from "./Sections/Pets.section";
import ResidentSection from "./Sections/Resident.section";
import { FormsContainer, ImageCenterer, WideButtonContainer } from "./NewResident.styles";

export default function NewResident() {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit } = methods;

  const fullFormSubmit = async (data) => {
    await uploadAllResidentData(data);
  };

  return (
    <div>
      <ImageCenterer>
        <SeqrityLogo />
      </ImageCenterer>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(fullFormSubmit)}>
          <FormsContainer>
            <ResidentSection />
            <CompanionsSection />
            <PetsSection />
            <PersonelSection />
          </FormsContainer>
          <WideButtonContainer>
            <Button type="submit">Registrar Colono</Button>
            <Button type="button" onClick={() => navigate("/")}>
              Cancelar
            </Button>
          </WideButtonContainer>
        </form>
      </FormProvider>
    </div>
  );
}

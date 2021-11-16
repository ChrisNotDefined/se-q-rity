import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../StyledComponents/Button";
import { FormsContainer, ImageCenterer, WideButtonContainer } from "./NewResident.styles";
import CompanionsSection from "./Sections/Companions.section";
import PersonelSection from "./Sections/Personnel.section";
import PetsSection from "./Sections/Pets.section";
import ResidentSection from "./Sections/Resident.section";

export default function NewResident() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const fullFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* Image Placeholder */}
      <ImageCenterer>
        <div style={{ backgroundColor: "blue", height: "100px", width: "300px" }}></div>
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
          </WideButtonContainer>
        </form>
      </FormProvider>
    </div>
  );
}

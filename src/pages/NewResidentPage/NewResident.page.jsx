import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import SeqrityLogo from "../../Components/SeqrityLogo";
import Spinner from "../../Components/Spinner";
import { Button } from "../../StyledComponents/Button";
import { uploadAllResidentData } from "../../utils/new_resident";
import CompanionsSection from "./Sections/Companions.section";
import PersonelSection from "./Sections/Personnel.section";
import PetsSection from "./Sections/Pets.section";
import ResidentSection from "./Sections/Resident.section";
import {
  FormsContainer,
  ImageCenterer,
  LoaderOverlay,
  WideButtonContainer,
} from "./NewResident.styles";

export default function NewResident() {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit } = methods;
  const [isUploading, setIsUploading] = useState(false);

  const fullFormSubmit = async (data) => {
    try {
      setIsUploading(true);
      await uploadAllResidentData(data);
    } catch (error) {
      console.log(error);
    }
    setIsUploading(false);
  };

  return (
    <div>
      {isUploading && (
        <LoaderOverlay>
          <Spinner height="8em" />
        </LoaderOverlay>
      )}
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

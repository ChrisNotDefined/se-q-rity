import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router";
import { Button } from "../../StyledComponents/Button";
import { FormsContainer, ImageCenterer, WideButtonContainer } from "./NewResident.styles";
import CompanionsSection from "./Sections/Companions.section";
import PersonelSection from "./Sections/Personnel.section";
import PetsSection from "./Sections/Pets.section";
import { newPet, newCompanions, newHouse, newPersonnel, newResident, newUbicacion } from "../../utils/api";
import ResidentSection from "./Sections/Resident.section";

export default function NewResident() {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit } = methods;

  const fullFormSubmit = async (data) => {
    let count = 0;
    let companionsPromises = [];
    let companionsResults = [];
    for (let k in data.companions){
      if (data.companions.hasOwnProperty(k)){
        companionsPromises.push(new Promise(newCompanions(k.nombre, k.telefono, k.fotografia, k.apellidos)))
      }
    }
    Promise.all(companionsPromises).then(values => {
      console.log(values);
    })
    console.log("numero de acompañantes: " + count)
    //await Promise.all([await ]);

    const lat = Math.random() * (21.163186 - 21.143543) + 21.143543;
    const lng = -1 * (Math.random() * (101.733571 - 101.722568) + 101.722568);
    console.log(lat + ", " + lng);
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
            <Button type="button" onClick={() => navigate("/")}>Cancelar</Button>
          </WideButtonContainer>
        </form>
      </FormProvider>
    </div>
  );
}

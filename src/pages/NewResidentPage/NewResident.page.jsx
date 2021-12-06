import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button } from "../../StyledComponents/Button";
import { FormsContainer, ImageCenterer, WideButtonContainer } from "./NewResident.styles";
import CompanionsSection from "./Sections/Companions.section";
import PersonelSection from "./Sections/Personnel.section";
import PetsSection from "./Sections/Pets.section";
import { newPet, newCompanions, newHouse, newPersonnel, newResident, newUbicacion } from "../../utils/api";
import ResidentSection from "./Sections/Resident.section";
import Geocode from "react-geocode";

export default function NewResident() {
  Geocode.setApiKey(process.env.REACT_APP_API_URL);

  Geocode.setLanguage("es");


  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit } = methods;

  const fullFormSubmit = async (data) => {
    // Companions section
    let count = 0;
    let companionsPromises = [];
    let companionsResults = [];
    if(data.companions !== undefined) {
      let companionsData = Object.entries(data.companions)
      for (let k in data.companions){
        if (data.companions.hasOwnProperty(k)){
          companionsPromises.push(newCompanions(companionsData[count][1].nombre, companionsData[count][1].telefono, companionsData[count][1].fotografia, companionsData[count][1].apellidos));
          count++;
        }
      }
      await Promise.all(companionsPromises).then(values => {
        companionsResults = values;
      })
    }

    // Pets section
    count = 0;
    let petsPromises = [];
    let petsResults = [];
    if(data.pets !== undefined) {
      let petsData = Object.entries(data.pets)
      for (let k in data.pets){
        if (data.pets.hasOwnProperty(k)){
          petsPromises.push(newPet(petsData[count][1].nombre, petsData[count][1].especie, petsData[count][1].edad, petsData[count][1].fotografia));
          count++;
        }
      }
      await Promise.all(petsPromises).then(values => {
        petsResults = values;
      })
    }

    // Personnel section
    count = 0;
    let personnelPromises = [];
    let personnelResults = [];
    if(data.personnel !== undefined) {
      let personnelData = Object.entries(data.personnel)
      for (let k in data.personnel){
        if (data.personnel.hasOwnProperty(k)){
          personnelPromises.push(newPersonnel(personnelData[count][1].nombre, personnelData[count][1].telefono, personnelData[count][1].cargo, personnelData[count][1].fotografia, personnelData[count][1].diasTrabajo));
          count++;
        }
      }
      await Promise.all(personnelPromises).then(values => {
        personnelResults = values;
      })
    }
    let residentId = ""
    await newResident(data.nombre, data.telefono, data.fotografia, data.apellidos, data.correo, petsResults, personnelResults, companionsResults).then(value => {
      residentId = value
    })

    const lat = Math.random() * (21.163186 - 21.143543) + 21.143543;
    const lng = -1 * (Math.random() * (101.733571 - 101.722568) + 101.722568);
    console.log(lat + ", " + lng);
    let calle = ""
    await Geocode.fromLatLng(lat, lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        calle = address;
      },
      (error) => {
        console.error(error);
      }
    );
    await newUbicacion(calle, "Leon Guanajuato", "Cañada del refugio", lat, lng, data.residencia).then(value => {
    console.log(value)
    })

    await newHouse(residentId, lat + ", " + lng).then(value => {
      console.log(value)
    })
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

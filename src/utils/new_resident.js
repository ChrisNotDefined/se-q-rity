import Geocode from "react-geocode";
import { newCompanions, newHouse, newPersonnel, newPet, newResident, newUbicacion } from "./api";

const GEOCODER_API_KEY = process.env.REACT_APP_GEOCODE_KEY;
Geocode.setApiKey(`${GEOCODER_API_KEY}`);
Geocode.setLanguage("es");

/**
 * Upload an array of similar objects
 * @param batch Your key-value set of objects
 * @param requestBuilder Method that returns the request promise for one object
 */
const uploadBatch = async (batch, requestBuilder) => {
  const batchRequests = [];
  if (batch === undefined || Object.keys(batch).length === 0) return [];

  Object.entries(batch).forEach(([, value]) => {
    batchRequests.push(requestBuilder(value));
  });

  const batchResults = await Promise.all(batchRequests);
  return batchResults;
};

export const uploadAllResidentData = async (data) => {
  // Companion section
  const companionsBatch = uploadBatch(data.companions, (companion) => {
    return newCompanions(
      companion.nombre,
      companion.telefono,
      companion.fotografia,
      companion.apellidos
    );
  });

  // Pet Section
  const petsBatch = uploadBatch(data.pets, (pet) => {
    return newPet(pet.nombre, pet.especie, pet.edad, pet.fotografia);
  });

  // Personnel section
  const personnelBatch = uploadBatch(data.personnel, (worker) => {
    return newPersonnel(
      worker.nombre,
      worker.telefono,
      worker.cargo,
      worker.fotografia,
      worker.diasTrabajo
    );
  });

  const [companionsResults, petsResults, personnelResults] = await Promise.all([
    companionsBatch,
    petsBatch,
    personnelBatch,
  ]);

  let residentId = "";
  await newResident(
    data.nombre,
    data.telefono,
    data.fotografia,
    data.apellidos,
    data.correo,
    petsResults,
    personnelResults,
    companionsResults
  ).then((value) => {
    residentId = value;
  });

  const lat = Math.random() * (21.163186 - 21.143543) + 21.143543;
  const lng = -1 * (Math.random() * (101.733571 - 101.722568) + 101.722568);
  console.log(lat + ", " + lng);
  let calle = "";
  await Geocode.fromLatLng(lat, lng).then(
    (response) => {
      const address = response.results[0].formatted_address;
      calle = address;
    },
    (error) => {
      console.error(error);
    }
  );
  await newUbicacion(
    calle,
    "Leon Guanajuato",
    "Cañada del refugio",
    lat,
    lng,
    data.residencia
  ).then((value) => {
    console.log(value);
  });

  await newHouse(residentId, lat + ", " + lng).then((value) => {
    console.log(value);
  });
};

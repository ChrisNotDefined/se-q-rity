import React, { useEffect, useState } from "react";
import {
  CentererContainer,
  DataTag,
  CircleImage,
  VerticalContainer,
  MainContainer,
  TranslucidCard,
} from "./DetalleColonoPage.styles";
import { getCompanion, getPet, getResident, getWorker } from "../../utils/api";
import { useParams } from "react-router";

const PetCard = ({ petID }) => {
  const [petData, setPetData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPet = async () => {
      setLoading(true);
      const p_data = await getPet(petID);
      if (!p_data.error) {
        console.log(p_data);
        setPetData(p_data);
      }
      setLoading(false);
    };

    loadPet();
  }, [petID]);

  if (loading)
    return (
      <VerticalContainer>
        <h3>Cargando</h3>
      </VerticalContainer>
    );
  if (!petData) return null;

  return (
    <TranslucidCard>
      <VerticalContainer>
        <h3>{petData.especie}</h3>
        <CircleImage src={petData.fotografia || "https://via.placeholder.com/150"} />
        <DataTag>
          <span>Nombre:</span> {petData.nombre}
        </DataTag>
        <DataTag>
          <span>Edad:</span> {petData.edad} años
        </DataTag>
      </VerticalContainer>
    </TranslucidCard>
  );
};

const CompanionCard = ({ compID }) => {
  const [companionData, setCompanionData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPet = async () => {
      setLoading(true);
      const p_data = await getCompanion(compID);
      if (!p_data.error) {
        console.log(p_data);
        setCompanionData(p_data);
      }
      setLoading(false);
    };

    loadPet();
  }, [compID]);

  if (loading)
    return (
      <VerticalContainer>
        <h3>Cargando</h3>
      </VerticalContainer>
    );
  if (!companionData) return null;

  return (
    <VerticalContainer>
      <CircleImage src={companionData.fotografia || "https://via.placeholder.com/150"} />
      <DataTag>
        <span>Nombre:</span> {companionData.nombre}
      </DataTag>
      <DataTag>
        <span>Apellidos:</span> {companionData.apellidos}
      </DataTag>
      <DataTag>
        <span>Teléfono:</span> {companionData.telefono}
      </DataTag>
    </VerticalContainer>
  );
};
const WorkerCard = ({ workerID }) => {
  const [workerData, setWorkerData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPet = async () => {
      setLoading(true);
      const p_data = await getWorker(workerID);
      if (!p_data.error) {
        console.log(p_data);
        setWorkerData(p_data);
      }
      setLoading(false);
    };

    loadPet();
  }, [workerID]);

  if (loading)
    return (
      <VerticalContainer>
        <h3>Cargando</h3>
      </VerticalContainer>
    );
  if (!workerData) return null;

  return (
    <VerticalContainer>
      <h3>{workerData.cargo}</h3>
      <CircleImage src={workerData.fotografia || "https://via.placeholder.com/150"} />
      <DataTag>
        <span>Nombre:</span> {workerData.nombre}
      </DataTag>
      <DataTag>
        <span>Teléfono:</span> {workerData.telefono}
      </DataTag>
      <DataTag>
        <span>Jornada:</span> {workerData.diasTrabajo}
      </DataTag>
    </VerticalContainer>
  );
};

export default function DetalleColono() {
  const { id: idParam } = useParams();
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const fetchResident = async () => {
      const res_data = await getResident(idParam);
      if (!res_data.error) {
        console.log(res_data);
        setResident(res_data);
      }
    };

    fetchResident();
  }, [idParam]);

  if (!resident) {
    return null;
  }

  return (
    <MainContainer>
      <VerticalContainer>
        <h1>Residente</h1>
        <CircleImage src={resident.fotografia || "https://via.placeholder.com/150"} />
        <DataTag>
          <span>Nombre:</span> {resident.nombre}
        </DataTag>
        <DataTag>
          <span>Apellidos:</span> {resident.apellidos}
        </DataTag>
        <DataTag>
          <span>Apellidos:</span> {resident.apellidos}
        </DataTag>
        <DataTag>
          <span>Correo:</span> {resident.correo}
        </DataTag>
      </VerticalContainer>
      <h2>Mascotas</h2>
      <CentererContainer>
        {resident.mascotas.map((petID) => {
          return <PetCard key={petID} petID={petID} />;
        })}
      </CentererContainer>
      <h2>Acompañantes</h2>
      <CentererContainer>
        {resident.acompañantes.map((acompID) => {
          return <CompanionCard key={acompID} compID={acompID} />;
        })}
      </CentererContainer>
      <h2>Personal</h2>
      <CentererContainer>
        {resident.personal.map((workerID) => {
          return <WorkerCard key={workerID} workerID={workerID} />;
        })}
      </CentererContainer>
    </MainContainer>
  );
}

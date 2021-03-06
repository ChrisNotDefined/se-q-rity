import React, { useEffect, useState } from "react";
import {
  CentererContainer,
  DataTag,
  CircleImage,
  VerticalContainer,
  MainContainer,
  TranslucidCard,
  ButtonContainer,
} from "./DetalleColonoPage.styles";
import { getCompanion, getPet, getResident, getWorker } from "../../utils/api";
import { useNavigate, useParams } from "react-router";
import { Button } from "../../StyledComponents/Button";

const PLACEHOLDER_IMG =
  "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png";


const PetCard = ({ petID }) => {
  const [petData, setPetData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPet = async () => {
      setLoading(true);
      const p_data = await getPet(petID);
      if (!p_data.error) {
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
        <CircleImage src={petData.fotografia || PLACEHOLDER_IMG} />
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
    <TranslucidCard>
      <VerticalContainer>
        <CircleImage src={companionData.fotografia || PLACEHOLDER_IMG} />
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
    </TranslucidCard>
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
    <TranslucidCard>
      <VerticalContainer>
        <h3>{workerData.cargo}</h3>
        <CircleImage src={workerData.fotografia || PLACEHOLDER_IMG} />
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
    </TranslucidCard>
  );
};

export default function DetalleColono() {
  const { id: idParam } = useParams();
  const [resident, setResident] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResident = async () => {
      const res_data = await getResident(idParam);
      if (!res_data.error) {
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
        <CircleImage src={resident.fotografia || PLACEHOLDER_IMG} />
        <DataTag>
          <span>Nombre:</span> {resident.nombre}
        </DataTag>
        <DataTag>
          <span>Apellidos:</span> {resident.apellidos}
        </DataTag>
        <DataTag>
          <span>Telefono:</span> {resident.telefono}
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
      <ButtonContainer>
        <Button onClick={() => navigate(-1)}>Regresar</Button>
      </ButtonContainer>
    </MainContainer>
  );
}

import ReactMapGL, { Marker } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { Button } from "../../StyledComponents/Button";
import {
  MapContainer,
  MapOverlay,
  StyledMarker,
  ButtonsContainer,
  MarkerPoint,
  ResidenceCard,
  SearchContainer,
} from "./Map.styles";
import { getLocations } from "../../utils/api";
import { logoutAction, useAuthContext } from "../../Providers/Auth.provider";
import { Input } from "../../StyledComponents/Input";
import { FieldsContainer } from "../../StyledComponents/FieldsContainer";
import { useNavigate } from "react-router";

const mapboxToken =
  "pk.eyJ1IjoiY2hyaXNub3RkZWZpbmVkIiwiYSI6ImNrd2U5eWE1eDAycWsydnF0ZmY1dmZ4eWQifQ.KGVi14zplvNaeVsgafp6Yw";

const drawMarker = (marker, onClick) => {
  const { _id: id, latitud: lat, longitud: lng, calle: str, colonia: col, numero: num } = marker;

  return (
    <Marker key={id} latitude={+lat} longitude={+lng}>
      <MarkerPoint onClick={onClick}>
        <StyledMarker>
          <span>
            {str} #{num}
            <br />
            {col}
          </span>
        </StyledMarker>
      </MarkerPoint>
    </Marker>
  );
};

const initialCoords = {
  latitude: 21.155674,
  longitude: -101.728608,
};

export default function MapPage() {
  const [viewport, setViewport] = useState({
    ...initialCoords,
    zoom: 14,
  });

  const [, dispatch] = useAuthContext();
  const navigate = useNavigate();

  const [selectedResidence, setSelectedResidence] = useState(null);

  const lastCoords = !selectedResidence
    ? initialCoords
    : {
        latitude: +selectedResidence.latitud,
        longitude: +selectedResidence.longitud,
      };

  const [mapData, setMapData] = useState([]);

  const focusOn = (latitude, longitude) => {
    setViewport((vp) => {
      return {
        ...vp,
        latitude,
        longitude,
        zoom: 17,
      };
    });
  };

  useEffect(() => {
    const loadLocations = async () => {
      const loc_data = await getLocations();
      if (loc_data.error) {
        if (loc_data.error.response.status === 401) {
          dispatch(logoutAction());
        }
        return;
      }
      console.log(loc_data);
      if (loc_data) setMapData(loc_data);
      else setMapData([]);
    };

    loadLocations();
  }, [dispatch]);

  return (
    <div>
      <MapContainer>
        <div className="map-div">
          <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={setViewport}
            mapboxApiAccessToken={mapboxToken}
          >
            {mapData.map((res) =>
              drawMarker(res, () => {
                setSelectedResidence(res);
                focusOn(+res.latitud, +res.longitud);
              })
            )}
          </ReactMapGL>
        </div>
        <MapOverlay>
          Lat: {viewport.latitude.toFixed(3)} - Lng: {viewport.longitude?.toFixed(3)} - Zoom:{" "}
          {viewport.zoom.toFixed(3)}
        </MapOverlay>
      </MapContainer>
      <SearchContainer>
        <FieldsContainer>
          <label>
            Buscar residencia
            <Input placeholder="Dirección" />
          </label>
        </FieldsContainer>
      </SearchContainer>
      <ButtonsContainer>
        <Button onClick={() => navigate("/")}>Regresar</Button>
        <Button
          onClick={() => {
            focusOn(lastCoords.latitude, lastCoords.longitude);
          }}
        >
          Centrar Previo
        </Button>
      </ButtonsContainer>
      {selectedResidence && (
        <ResidenceCard>
          <h2>Detalles de residencia</h2>
          <p>
            {selectedResidence.calle} # {selectedResidence.numero}
          </p>
          <p>
            {selectedResidence.colonia}, {selectedResidence.ciudad}
          </p>
        </ResidenceCard>
      )}
    </div>
  );
}

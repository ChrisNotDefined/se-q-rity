import ReactMapGL, { Marker } from "react-map-gl";
import React, { useEffect, useRef, useState } from "react";
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
import { getLocations, searchLocation } from "../../utils/api";
import { Input } from "../../StyledComponents/Input";
import { FieldsContainer } from "../../StyledComponents/FieldsContainer";
import { useNavigate } from "react-router";
import { SearchList, SearchResult } from "../../Components/SearchResult";
import Spinner from "../../Components/Spinner";

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

  const navigate = useNavigate();

  const [selectedResidence, setSelectedResidence] = useState(null);

  const lastCoords = !selectedResidence
    ? initialCoords
    : {
        latitude: +selectedResidence.latitud,
        longitude: +selectedResidence.longitud,
      };

  const [mapData, setMapData] = useState([]);

  const timeoutRef = useRef();
  const [keySearch, setKeySearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [writing, setWriting] = useState(false);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(async () => {
      const kwrd = keySearch.trim();
      if (kwrd !== "") {
        const data = await searchLocation(kwrd);
        if (!data.error) {
          setSearchResults(data);
        }
      }
      setWriting(false);
    }, 500);
  }, [keySearch]);

  const handleInputWrite = (evt) => {
    setWriting(true);
    setKeySearch(evt.target.value);
    setSearchResults([]);
  };

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
      console.log(loc_data);
      if (loc_data) setMapData(loc_data);
      else setMapData([]);
    };

    loadLocations();
  }, []);

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
            <Input placeholder="Dirección" onChange={handleInputWrite} />
          </label>
          {(searchResults || writing) && (
            <SearchList>
              {writing ? (
                <div style={{ display: "flex", justifyContent: "center", padding: "1em" }}>
                  <Spinner height="4em" />
                </div>
              ) : (
                searchResults.map((result) => {
                  return (
                    <SearchResult
                      key={result._id}
                      title={result.calle}
                      onClick={() => {
                        focusOn(+result.latitud, +result.longitud);
                      }}
                    />
                  );
                })
              )}
            </SearchList>
          )}
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

import ReactMapGL, { Marker } from "react-map-gl";
import React, { useEffect, useState } from "react";
import { Button } from "../../StyledComponents/Button";
import { MapContainer, MapOverlay, StyledMarker, ButtonsContainer } from "./Map.styles";
import { getLocations } from "../../utils/api";

const mapboxToken =
  "pk.eyJ1IjoiY2hyaXNub3RkZWZpbmVkIiwiYSI6ImNrd2U5eWE1eDAycWsydnF0ZmY1dmZ4eWQifQ.KGVi14zplvNaeVsgafp6Yw";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.032, 38.913],
      },
      properties: {
        title: "Mapbox",
        description: "Washington, D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.414, 37.776],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-99.867701, 16.854771],
      },
      properties: {
        title: "Pet",
        description: "Bobby (Mascota)",
      },
    },
  ],
};

export default function MapPage() {
  const [viewport, setViewport] = useState({
    latitude: 21.155674,
    longitude: -101.728608,
    zoom: 14,
  });

  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    const loadLocations = async () => {
      const loc_data = await getLocations();
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
            {geojson.features.map((f) => {
              const [lng, lat] = f.geometry.coordinates;
              const { description } = f.properties;

              return (
                <Marker key={f.geometry.coordinates} latitude={lat} longitude={lng}>
                  <StyledMarker>
                    {description} <br />
                    {lat}, {lng}
                  </StyledMarker>
                </Marker>
              );
            })}
            {mapData.map((marker) => {
              const { _id: id, Latitud: lat, Longitud: lng, Calle: str } = marker;
              return (
                <Marker key={id} latitude={+lat} longitude={+lng}>
                  <StyledMarker>{str}</StyledMarker>
                </Marker>
              );
            })}
          </ReactMapGL>
        </div>
        <MapOverlay>
          Lat: {viewport.latitude.toFixed(3)} - Lng: {viewport.longitude.toFixed(3)} - Zoom:{" "}
          {viewport.zoom.toFixed(3)}
        </MapOverlay>
      </MapContainer>
      <ButtonsContainer>
        <Button>Localizar Mascota</Button>
        <Button>Centrar Residencia</Button>
      </ButtonsContainer>
    </div>
  );
}

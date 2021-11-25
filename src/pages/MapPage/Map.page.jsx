import ReactMapGL, { FlyToInterpolator, Marker, TRANSITION_EVENTS } from "react-map-gl";
import React, { useState } from "react";
import { Button } from "../../StyledComponents/Button";
import { MapContainer, MapOverlay, StyledMarker } from "./Map.styles";

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
  ],
};

export default function MapPage() {
  const [viewport, setViewport] = useState({
    latitude: 16.8336,
    longitude: -99.915,
    zoom: 14,
  });

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

              return (
                <Marker key={f.geometry.coordinates} latitude={lat} longitude={lng}>
                  <StyledMarker>
                    {lat}, {lng}
                  </StyledMarker>
                </Marker>
              );
            })}
            <Marker key="manual" latitude={16.854771} longitude={-99.867701}>
              <StyledMarker>16.854771, -99.867701</StyledMarker>
            </Marker>
          </ReactMapGL>
        </div>
        <MapOverlay>
          Lat: {viewport.latitude.toFixed(3)} - Lng: {viewport.longitude.toFixed(3)} - Zoom:{" "}
          {viewport.zoom.toFixed(3)}
        </MapOverlay>
      </MapContainer>
      <div>
        <Button>Localizar Mascota</Button>
        <Button>Centrar Residencia</Button>
      </div>
    </div>
  );
}

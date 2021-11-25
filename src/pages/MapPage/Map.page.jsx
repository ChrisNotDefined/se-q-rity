import React, { useState } from "react";
import { useMap } from "../../hooks";
import { MapContainer, MapOverlay } from "./Map.styles";

export default function MapPage() {
  const [lat, setLat] = useState(16.8336);
  const [lng, setLng] = useState(-99.915);
  const [zoom, setZoom] = useState(14);

  const handleMove = (center) => {
    setLat(center.lat);
    setLng(center.lng);
  };

  const handleZoom = (currentZoom) => {
    setZoom(currentZoom);
  };

  const { mapDiv, mapInstace } = useMap({
    lat,
    lng,
    zoom,
    handleMove,
    handleZoom,
  });

  return (
    <MapContainer>
      <div className="map-div" ref={mapDiv} />
      <MapOverlay>
        Lat: {lat.toFixed(3)} - Lng: {lng.toFixed(3)} - Zoom: {zoom.toFixed(3)}
      </MapOverlay>
    </MapContainer>
  );
}

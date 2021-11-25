import React, { useEffect, useState } from "react";
import { useMap } from "../../hooks";
import { MapContainer } from "./Map.styles";

export default function MapPage() {
  const [lat, setLat] = useState(16.8336);
  const [lng, setLng] = useState(-99.915);
  const [zoom, setZoom] = useState(14);

  const handleMove = (center) => {
    setLat(center.lat);
    setLng(center.lng);
  };

  const { mapDiv } = useMap({
    lat,
    lng,
    zoom,
    handleMove,
  });

  return (
    <div>
      Map Page lat: {lat}, lng: {lng}
      <MapContainer ref={mapDiv} />
    </div>
  );
}

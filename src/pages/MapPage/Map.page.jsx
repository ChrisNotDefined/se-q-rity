import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, MapOverlay } from "./Map.styles";

mapboxgl.accessToken =
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
  const [lat, setLat] = useState(16.8336);
  const [lng, setLng] = useState(-99.915);
  const [zoom, setZoom] = useState(14);

  const mapDiv = useRef(null);
  const mapInstance = useRef(null);

  const handleMove = (center) => {
    setLat(center.lat);
    setLng(center.lng);
  };

  const handleZoom = (currentZoom) => {
    setZoom(currentZoom);
  };

  useEffect(() => {
    if (mapInstance.current) return;

    mapInstance.current = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom ?? 9,
    });

    const handlers = {
      move: () => {
        handleMove(mapInstance.current.getCenter());
      },

      zoom: () => {
        handleZoom(mapInstance.current.getZoom());
      },
    };

    Object.entries(handlers).forEach(([key, value]) => {
      mapInstance.current?.on(key, value);
    });
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

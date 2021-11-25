import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXNub3RkZWZpbmVkIiwiYSI6ImNrd2U5eWE1eDAycWsydnF0ZmY1dmZ4eWQifQ.KGVi14zplvNaeVsgafp6Yw";

export const useMap = ({ lat, lng, zoom, handleMove, handleZoom }) => {
  const mapDiv = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapInstance.current) return;

    console.log("Init");

    mapInstance.current = new mapboxgl.Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom ?? 9,
    });

    const handlers = {
      move: () => {
        handleMove?.(mapInstance.current.getCenter());
      },

      zoom: () => {
        handleZoom?.(mapInstance.current.getZoom());
      },
    };

    Object.entries(handlers).map(([key, value]) => {
      mapInstance.current?.on(key, value);
      return () => mapInstance.current?.off(key, value);
    });
  });

  return {
    mapDiv,
    mapInstace: mapInstance,
  };
};

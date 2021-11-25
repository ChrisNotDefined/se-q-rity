import styled from "styled-components";

export const MapContainer = styled.div`
  height: 80vmin;
  background-color: #00f0ff;
  border-radius: 1em;
  margin: 2em;
  position: relative;

  .map-div {
    height: 100%;
    border-radius: inherit;
  }
`;

export const MapOverlay = styled.div`
  position: absolute;
  top: 2em;
  left: 2em;
  background-color: white;
  padding: 0.5em;
  border-radius: 0.2em;
`;

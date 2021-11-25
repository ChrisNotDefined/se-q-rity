import styled from "styled-components";

export const MapContainer = styled.div`
  height: 80vmin;
  background-color: #00f0ff;
  border-radius: 0.5em;
  margin: 2em;
  position: relative;

  .map-div {
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
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

export const StyledMarker = styled.div`
  transform: translate(-50%, -100%);
  background-color: #0045EE85;
  padding: 0.5em;
  border-radius: 0.2em;
  padding-bottom: 1em;
  width: fit-content;
  color: white;
`;
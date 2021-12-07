import styled from "styled-components";

export const MapContainer = styled.div`
  height: 76vmin;
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

export const SearchContainer = styled.div`
  margin: 0 2em;
`;

export const MapOverlay = styled.div`
  position: absolute;
  top: 2em;
  left: 2em;
  background-color: white;
  padding: 0.5em;
  border-radius: 0.2em;
`;

export const MarkerPoint = styled.div`
  background-color: #0026ff;
  box-shadow: 0 3px 5px black;
  transform: translate(-50%, -50%);
  border-radius: 90em;
  width: 1em;
  height: 1em;
  position: relative;
  z-index: 10;
  cursor: pointer;

  > * {
    display: none;
    transform: translate(-50%, -100%);
    position: absolute;
  }

  :hover > * {
    display: flex;
    z-index: 100;
  }
`;

export const StyledMarker = styled.div`
  background-color: #fff;
  min-width: 20em;
  justify-content: center;
  padding: 0.5em;
  border-radius: 0.2em;
  padding-bottom: 1em;
  width: fit-content;
  color: black;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 max(2em, 8vw) 2em;
  gap: max(2em, 10vw);

  > * {
    flex-basis: 40em;
  }
`;

export const ResidenceCard = styled.div`
  margin: 2em;
  background-color: white;
  box-shadow: 0 0 10px #0008;
  border-radius: 1em;
  padding: 2em;

  h2 {
    margin: 0;
  }

  p {
    margin: 0.2em 0;
  }
`;

import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 0 clamp(0em, 10vw, 10em) 3em;

  h2 {
    text-align: center;
    color: white;
    text-shadow: 0 0 5px black;
    margin: 0;
    margin-bottom: 0.5em;
    font-size: 2em;
    margin-top: 2em;
    margin-bottom: 0;
  }
`;

export const TranslucidCard = styled.div`
  background-color: #fffd;
  border-radius: 0.5em;
  padding: 2em;
  width: clamp(20em, 10vw, 40em);
  box-shadow: #0008 0 0 1em;
`;

export const CircleImage = styled.img`
  display: block;
  width: 9em;
  height: 9em;
  object-fit: cover;
  border-radius: 99em;
  box-shadow: #0008 0 0 1em;
`;

export const DataTag = styled.p`
  column-gap: 2em;
  background: rgb(71, 112, 255);
  background: linear-gradient(78deg, rgba(71, 112, 255, 1) 0%, rgba(5, 2, 235, 1) 100%);
  border-width: 2px;
  border-style: solid;
  border-color: white;
  color: white;
  padding: 0.5em;

  span {
    font-weight: bold;
  }
`;

export const VerticalContainer = styled.section`
  margin: auto;
  margin-top: 2em;
  display: flex;
  flex-direction: column;

  h1,
  h3 {
    text-align: center;
    color: white;
    text-shadow: 0 0 5px black;
    margin: 0;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 3em;
  }

  h3 {
    font-size: 1.8em;
  }

  img {
    align-self: center;
  }
`;

export const CentererContainer = styled.section`
  margin: auto;
  margin-top: 2em;
  display: flex;
  justify-content: space-evenly;
`;

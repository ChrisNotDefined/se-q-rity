import styled from "styled-components";

export const FormsContainer2 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 2em;

  label {
    column-gap: 2em;
    max-width: min(8vw, 8em);
    background: rgb(71,112,255);
    background: linear-gradient(78deg, rgba(71,112,255,1) 0%, rgba(5,2,235,1) 100%);
    border-width: 2px;
    border-style: solid;
    border-color: white;
    padding: 1.2em;
    margin: 0 auto;
    display: grid;
    grid-template-columns: min(30em, 60vw) auto;
  }
`;

export const FormsContainer3 = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 2em;

  label {
    column-gap: 2em;
    max-width: min(8vw, 8em);
    height: 40px;
    background: rgb(71,112,255);
    background: linear-gradient(78deg, rgba(71,112,255,1) 0%, rgba(5,2,235,1) 100%);
    border-width: 2px;
    border-style: solid;
    border-color: white;
    padding: 1.2em;
    margin: 0 auto;
    display: grid;
    grid-template-columns: min(30em, 60vw) auto;
  }
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #CCC8;
  border-radius: 0.4em;
  margin: 0.2em;
  padding: 0.5em;

  h3 {
    text-align: left;
    font-size: 1.5em;
    color: white;
    border: solid 5px #121d49aa;
    width: max-content;
    margin: 0;
    margin-left: 0;
    padding: 0.2em 0.8em;
  }
`;

export const FormsContainer = styled.div`
  label{
    column-gap: 2em;
    max-width: min(30vw, 30em);
    background: rgb(71,112,255);
    background: linear-gradient(78deg, rgba(71,112,255,1) 0%, rgba(5,2,235,1) 100%);
    border-width: 2px;
    border-style: solid;
    border-color: white;
    padding: 1.2em;
    margin: 0 auto;
    display: grid;
    grid-template-columns: min(30em, 60vw) auto;
  }
`;

export const FormCollection = styled.div`
  display: grid;
  gap: 0.5em;
  grid-template-columns: repeat(auto-fill, 15em);
  justify-content: space-around;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

export const AddBtnContainer = styled.div`
  display: flex;
  padding: 2em;
  justify-content: center;
`;

export const ImageCenterer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddButton = styled.button`
  --size: 2.4em;
  background-color: green;
  color: white;
  border-radius: 99em;
  border: none;
  font-size: var(--size);
  width: calc(var(--size) * 1.4);
  height: calc(var(--size) * 1.4);
  transition: box-shadow 200ms;
  cursor: pointer;

  :focus,
  :hover {
    box-shadow: 0 0 0 4px #0f08;
  }
`;

export const RemoveButton = styled.button`
  --size: 1.2em;
  bottom: 0;
  left: 5em;
  position: absolute;
  background-color: red;
  color: white;
  border-radius: 99em;
  border: none;
  font-size: var(--size);
  width: calc(var(--size) * 1.4);
  height: calc(var(--size) * 1.4);
  transition: box-shadow 200ms;
  cursor: pointer;

  :focus,
  :hover {
    box-shadow: 0 0 0 4px #f008;
  }
`;

export const WideButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em;

  > button {
    width: 50%;
  }
`;


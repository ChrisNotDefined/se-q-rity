import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../../StyledComponents/Button";
import { FieldsContainer } from "../../StyledComponents/FieldsContainer";
import { Input } from "../../StyledComponents/Input";
import { searchPerson } from "../../utils/api";
import { ButtonsContainer, FormContainer } from "./MiPerfil.styles";

export default function MiPerfil() {
  const navigate = useNavigate();
  const timeoutRef = useRef();
  const [writing, setWriting] = useState(false);
  const [keySearch, setKeySearch] = useState("");

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(async () => {
      if (keySearch.trim() !== "") {
        const data = await searchPerson(keySearch);
        console.log(data);
      }
      setWriting(false);
    }, 500);
  }, [keySearch]);

  const handleInputWrite = (evt) => {
    setWriting(true);
    setKeySearch(evt.target.value);
  };

  return (
    <FormContainer>
      <div style={{ backgroundColor: "blue", height: "120px" }}></div>
      <ButtonsContainer>
        <Button type="button">Mi Perfil</Button>
        <Button type="button" onClick={() => navigate("/map")}>
          Mapa
        </Button>
      </ButtonsContainer>
      <FieldsContainer>
        <label>
          Buscar Colono {writing && "(writing)"}
          <Input onChange={handleInputWrite} placeholder={"Busqueda de Colono"} value={keySearch} />
        </label>
        <Button type="button" onClick={() => navigate("/new-resident")}>
          Nuevo Colono
        </Button>
      </FieldsContainer>
      <Button type="button" onClick={() => navigate("/new-admin")}>
        Nuevo Administrador
      </Button>
    </FormContainer>
  );
}

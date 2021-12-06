import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { SearchList, SearchResult } from "../../Components/SearchResult";
import Spinner from "../../Components/Spinner";
import { logoutAction, useAuthContext } from "../../Providers/Auth.provider";
import { Button } from "../../StyledComponents/Button";
import { FieldsContainer } from "../../StyledComponents/FieldsContainer";
import { Input } from "../../StyledComponents/Input";
import { searchPerson } from "../../utils/api";
import { ButtonsContainer, FormContainer } from "./MiPerfil.styles";

export default function MiPerfil() {
  const navigate = useNavigate();
  const timeoutRef = useRef();
  const [, dispatch] = useAuthContext();
  const [writing, setWriting] = useState(false);
  const [keySearch, setKeySearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(async () => {
      const kwrd = keySearch.trim();
      if (kwrd !== "") {
        const data = await searchPerson(kwrd);
        if (!data.error) {
          setSearchResults(data);
        }
      }
      setWriting(false);
    }, 500);
  }, [keySearch]);

  const handleInputWrite = (evt) => {
    setWriting(true);
    setKeySearch(evt.target.value);
    setSearchResults([]);
  };

  return (
    <FormContainer>
      <div style={{ backgroundColor: "blue", height: "120px" }}></div>
      <ButtonsContainer>
        <Button type="button" onClick={() => dispatch(logoutAction())}>
          Cerrar Sesión
        </Button>
        <Button type="button" onClick={() => navigate("/map")}>
          Mapa
        </Button>
      </ButtonsContainer>
      <FieldsContainer>
        <label>
          Buscar Colono
          <Input onChange={handleInputWrite} placeholder={"Busqueda de Colono"} value={keySearch} />
        </label>
        {(searchResults || writing) && (
          <SearchList>
            {writing ? (
              <div style={{ display: "flex", justifyContent: "center", padding: "1em" }}>
                <Spinner height="4em" />
              </div>
            ) : (
              searchResults.map((result) => {
                return (
                  <SearchResult
                    key={result._id}
                    title={result.nombre}
                    subtitle={result.apellidos}
                  />
                );
              })
            )}
          </SearchList>
        )}
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

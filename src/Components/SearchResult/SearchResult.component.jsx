import React from "react";
import { ListContainer, ListItem, Subtitle, Title } from "./SearchResult.styles";

export function SearchResult({ title, subtitle, onClick }) {
  return (
    <ListItem onClick={onClick}>
      <Title>{title}</Title> <Subtitle>{subtitle}</Subtitle>
    </ListItem>
  );
}

export function SearchList({ children }) {
  return <ListContainer>{children}</ListContainer>;
}

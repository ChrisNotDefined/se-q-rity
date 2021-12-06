import styled from "styled-components";

export const ListContainer = styled.div`
  background-color: white;
  max-height: 10em;
  border-radius: 0.4em;
  overflow-y: auto;
`;

export const ListItem = styled.div`
  padding: 0.3em;
  transition: background-color 200ms;

  &:not(:last-child) {
    border-bottom: solid 2px gray;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 1em;
  margin: 0;
`;

export const Subtitle = styled.span`
  margin: 0;
  font-size: 0.8em;
`;

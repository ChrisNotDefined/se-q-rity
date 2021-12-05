import React from "react";
import { logoutAction, useAuthContext } from "../../Providers/Auth.provider";
import { Button } from "../../StyledComponents/Button";
// Use the Styled div as a component
import { Centerer } from "./Home.styles";

export default function Home() {
  const [, dispatch] = useAuthContext();

  return (
    <Centerer>
      <span>
        React App for <b>SEQrity</b>
      </span>
      <Button onClick={() => dispatch(logoutAction())}>Logout</Button>
    </Centerer>
  );
}

import React from "react";

import seqrityLogo from "../../assets/img/SEQrity.svg";
import { LogoContainer } from "./SeqrityLogo.styles";

export default function SeqrityLogo() {
  return (
    <LogoContainer>
      <img src={seqrityLogo} alt="Logo" />
    </LogoContainer>
  );
}

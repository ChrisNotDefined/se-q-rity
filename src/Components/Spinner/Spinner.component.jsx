import React from "react";
import loaderImg from "../../assets/img/loader.svg";
import { SpinImg } from "./Spinner.styles";

export default function Spinner({height}) {
  return <SpinImg src={loaderImg} alt="loader" style_height={height} />;
}

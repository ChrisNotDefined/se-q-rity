import React, { useRef, useState } from "react";
import { Container, HTMLInput, ImageBtn } from "./ImageInput.styles";

export default function ImageInput({ onSelected }) {
  const inputRef = useRef();
  const [previewUrl, setPreviewUrl] = useState(undefined);

  const handleInputChange = (e) => {
    const inputFile = e.target?.files[0];

    if (inputFile === undefined) {
      setPreviewUrl(undefined);
    } else {
      const url = URL.createObjectURL(inputFile);
      setPreviewUrl(url);
    }

    onSelected?.(inputFile);
  };

  return (
    <Container onClick={() => inputRef.current.click()}>
      <ImageBtn
        type="image"
        src={previewUrl || "https://via.placeholder.com/150"}
        alt="Selected File"
      />
      <HTMLInput ref={inputRef} type="file" accept="image/*" onChange={handleInputChange} />
    </Container>
  );
}

import React, { useRef, useState } from "react";
import { Container, HTMLInput, ImageBtn } from "./ImageInput.styles";

const PLACEHOLDER_IMG =
  "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png";

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
        src={previewUrl || PLACEHOLDER_IMG}
        alt="Selected File"
      />
      <HTMLInput ref={inputRef} type="file" accept="image/*" onChange={handleInputChange} />
    </Container>
  );
}

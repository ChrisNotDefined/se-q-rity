import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormsContainer, FormImgContainer, FormsContainer2, FormsContainer3} from "./DetalleColonoPage.styles";
import ImageInput from "../../Components/ImageInput/ImageInput.component";

export default function DetalleColono() {
  const methods = useForm();
  const { handleSubmit } = methods;

  const fullFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{overflowy: 'auto'}}>
      <FormImgContainer>
        <ImageInput/>
      </FormImgContainer>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(fullFormSubmit)}>
          <FormsContainer>
            <p></p>
            <label></label>
            <p></p>
            <label></label>
            <p></p>
            <label></label>
            <p></p>
            <label></label>
          </FormsContainer>
        </form>
      </FormProvider>
      <FormImgContainer>
        <div style={{display: 'flex', gap: '4em'}}>
        <ImageInput/>
        <ImageInput/>
        </div>
      </FormImgContainer>
      <FormsContainer2>
        <div style={{display: 'flex', gap: '3em'}}>
          <label></label>
          <label></label>
        </div>
      </FormsContainer2>
      <FormImgContainer>
        <div style={{display: 'flex', gap: '4em'}}>
        <ImageInput/>
        <ImageInput/>
        </div>
      </FormImgContainer>
      <FormsContainer3>
        <div style={{display: 'flex', gap: '3em'}}>
          <label></label>
          <label></label>
        </div>
      </FormsContainer3>
      <FormImgContainer>
        <div style={{display: 'flex', gap: '4em'}}>
        <ImageInput/>
        <ImageInput/>
        <ImageInput/>
        </div>
      </FormImgContainer>
      <FormsContainer3>
        <div style={{display: 'flex', gap: '3em'}}>
          <label></label>
          <label></label>
          <label></label>
        </div>
      </FormsContainer3>
    </div>
  );
}

import * as React from "react";
import { TextArea, Label, InputContainer, Input } from "./styles";

export default function FichaInput(props) {
  const { label, valor, onEdit, isTextArea, maxLength, width } = props;

  const renderInput = () => {
    return isTextArea ? (
      <TextArea maxLength={maxLength ?? 99999} value={valor} onChange={onEdit}></TextArea>
    ) : (
      <Input value={valor} onChange={onEdit}></Input>
    );
  };

  return (
    <InputContainer style={width && {width: width}}>
      <Label>{label}:</Label>
      {renderInput()}
    </InputContainer>
  );
}

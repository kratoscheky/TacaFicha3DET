import * as React from "react";
import { TextArea, Label, InputContainer, Input } from "./styles";

export default function FichaInput(props) {
  const { label, valor, onEdit, isTextArea, maxLength } = props;

  const renderInput = () => {
    return isTextArea ? (
      <TextArea maxLength={maxLength ?? 99999} value={valor} onChange={onEdit}></TextArea>
    ) : (
      <Input value={valor} onChange={onEdit}></Input>
    );
  };

  return (
    <InputContainer>
      <Label>{label}:</Label>
      {renderInput()}
    </InputContainer>
  );
}

import * as React from "react";
import { TextArea, Label, InputContainer, Input, IconInput, Icon } from "./styles";

export default function FichaInput(props) {
  const { label, valor, onEdit, isTextArea, maxLength, width, disabled, icon, type } = props;

  const renderInput = () => {
    return isTextArea ? (
      <TextArea disabled={disabled} maxLength={maxLength ?? 99999} value={valor} onChange={onEdit}></TextArea>
    ) : (
      <IconInput>
        {
          icon && <Icon src={icon} />
        }
        <Input type={type} style={{
          padding: icon ? '16px 16px 16px 42px' : '16px 16px',
          width: '100%'
        }} disabled={disabled} value={valor} onChange={onEdit}></Input>
      </IconInput>
    );
  };

  return (
    <InputContainer style={width && {width: width}}>
      <Label>{label}:</Label>
      {renderInput()}
    </InputContainer>
  );
}

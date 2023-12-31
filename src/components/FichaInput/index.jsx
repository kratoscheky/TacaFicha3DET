import * as React from "react";
import {Icon, IconInput, Input, InputContainer, Label, TextArea} from "./styles";

export default function FichaInput(props) {
  const { label, valor, onEdit, isTextArea, maxLength, width, disabled, icon, type, testId } = props;

  const renderInput = () => {
    return isTextArea ? (
      <TextArea disabled={disabled} maxLength={maxLength ?? 99999} value={valor} onChange={onEdit} data-test-id={testId}></TextArea>
    ) : (
      <IconInput>
        {
          icon && <Icon src={icon}/>
        }
        <Input type={type} style={{
          padding: icon ? '16px 16px 16px 42px' : '16px 16px',
          width: '100%'
        }} disabled={disabled} value={valor} onChange={onEdit} data-test-id={testId}></Input>
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

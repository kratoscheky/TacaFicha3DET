import { TextareaAutosize } from "@mui/material";
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Label = styled.label`

`;

export const Input = styled.input`
  display: inline-block;
  line-height: 1;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 3px;
  color: var(--color-foreground);
  fill: var(--color-background);
  background-color: var(--color-background);
  transition: all 0.3s;
  border: 1px solid var(--input-border);
  width: 100%;
`;

export const TextArea = styled(TextareaAutosize)`
  display: inline-block;
  line-height: 1;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 3px;
  color: var(--color-foreground);
  fill: var(--color-background);
  background-color: var(--color-background);
  transition: all 0.3s;
  border: 1px solid var(--input-border);
  width: 100%;
`;

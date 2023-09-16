import {TextareaAutosize} from "@mui/material";
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  color: #FFF;
`;

export const Label = styled.label`

`;

export const Input = styled.input`
  border: unset !important;
  border-radius: 8px !important;
`;

export const Icon = styled.img`
  position: absolute;
  top: 10px;
  left: 8px;
  width: 30px;
  height: 30px;
`

export const IconInput = styled.div`
position: relative;
`

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

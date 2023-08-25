import { TextareaAutosize } from "@mui/material";
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const Label = styled.label`
  min-width: 110px;
`;

export const Input = styled.input`
  display: inline-block;
  line-height: 1;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 3px;
  color: #000;
  fill: #fff;
  transition: all 0.3s;
  border: 1px solid #00000050;
  width: 100%;
`;

export const TextArea = styled(TextareaAutosize)`
  display: inline-block;
  line-height: 1;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 3px;
  color: #000;
  fill: #fff;
  transition: all 0.3s;
  border: 1px solid #00000050;
  width: 100%;
`;

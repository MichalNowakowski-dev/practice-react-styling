import React from "react";
import { StyledButton } from "./Button.styled";

const Button = (props) => {
  return (
    <StyledButton size={props.size} variant={props.variant}>
      {props.children}
    </StyledButton>
  );
};

export default Button;

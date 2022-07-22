import React from "react";

import { ButtonBack, ButtonFront } from "./index";

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront
      alt={props.alt}
      onClick={props.onClick}
      href={props.href}
      disabled={props.disabled}
      download={props.download}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;

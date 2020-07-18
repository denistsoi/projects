import React from "react";
import ComponentProps from "../types";

const Card = (props: ComponentProps) => (
  <div className={props.tailwind ? props.tailwind : props.className}>
    {props.children}
  </div>
);

export default Card;

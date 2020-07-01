import React from "react";

export interface ComponentProps {
  tailwindcss: string;
}

const Test = (props: ComponentProps) => (
  <div className={props.tailwindcss}>Hello</div>
);

export default Test;

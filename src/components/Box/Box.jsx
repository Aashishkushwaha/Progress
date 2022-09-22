import React from "react";
import "./Box.css";

function Box({ className, children, props }) {
  const classNames = ["box__container", className];
  return (
    <div className={classNames.join(" ")} {...props}>
      {children}
    </div>
  );
}

export default Box;

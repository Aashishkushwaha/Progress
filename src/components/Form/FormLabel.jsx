import React from "react";
import "./Form.css";

function FormLabel({ children, className, ...props }) {
  const classNames = ["form__field--label", className];
  return (
    <label {...props} className={classNames.join(" ")}>
      {children}
    </label>
  );
}

export default FormLabel;

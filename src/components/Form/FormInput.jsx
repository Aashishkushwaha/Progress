import React from "react";
import "./Form.css";

function FormInput({ className = "", ...props }) {
  const classNames = ["form__field--input", className];
  return <input {...props} className={classNames.join(" ")} />;
}

export default FormInput;

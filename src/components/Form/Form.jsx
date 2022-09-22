import React from "react";
import "./Form.css";

function Form({ children, ...props }) {
  return (
    <form {...props} className="form__container">
      {children}
    </form>
  );
}

export default Form;

import React from "react";
import "./Form.css";

function FormFieldContainer({ children, ...props }) {
  return (
    <div {...props} className="form__field--container">
      {children}
    </div>
  );
}

export default FormFieldContainer;

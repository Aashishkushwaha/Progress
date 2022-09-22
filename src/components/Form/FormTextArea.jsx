import React from "react";
import "./Form.css";
import "./Form.css";

function FormTextArea({ ...props }) {
  return <textarea className="form__field--textarea" {...props} />;
}

export default FormTextArea;

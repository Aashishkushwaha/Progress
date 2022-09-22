import React from "react";
import "./Form.css";

function FormButton({ onClick, children, variant, shape, ...props }) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`form__field--button form__field--${variant}-button form__field--${shape}-button`}
    >
      {children}
    </button>
  );
}

FormButton.defaultProps = {
  onClick: () => {},
  shape: "",
  children: "Click Me",
  variant: "primary",
};

export default FormButton;

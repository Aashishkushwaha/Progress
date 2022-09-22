import React from "react";
import "./Form.css";

function FormSelect({ options, ...props }) {
  return (
    <select className="form__field--select" {...props}>
      {options.map(({ value, label, props }) => (
        <option key={label} value={value} {...props}>
          {label}
        </option>
      ))}
    </select>
  );
}

FormSelect.defaultProps = {
  options: [],
  value: "",
  onChange: () => {},
};

export default FormSelect;

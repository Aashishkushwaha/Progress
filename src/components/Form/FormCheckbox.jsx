import React from "react";
import Box from "../Box/Box";

function FormCheckbox({ children, id, ...props }) {
  return (
    <Box className="form__field--checkbox flex gap-2">
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id} className="inline-block full-w">
        {children}
      </label>
    </Box>
  );
}

FormCheckbox.defaultProps = {
  onChange: () => {},
};

export default FormCheckbox;

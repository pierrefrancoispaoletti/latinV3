import React from "react";

import {
  FormInputContainer,
  GroupContainer,
  LabelContainer,
} from "./form-input.style";

const FormInput = ({ handleChange, label, ...others }) => {
  return (
    <GroupContainer>
      {others.name === "subCategory" && <label htmlFor={label}>{label}</label>}
      <FormInputContainer onChange={handleChange} {...others} />
      {label && others.name !== "subCategory" && (
        <LabelContainer
          htmlFor=""
          className={`${
            String(others?.value)?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </LabelContainer>
      )}
    </GroupContainer>
  );
};

export default FormInput;

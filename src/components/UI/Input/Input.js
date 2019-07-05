import React from "react";
import cls from "./Input.css";

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched;
}

const Input = props => {
  const inputType = props.type || "text";
  const classes = [cls.Input];
  const htmlFor = `${inputType}-${Math.random().toFixed(5)}`;

  if (isInvalid(props)) {
    classes.push(cls.invalid);
  }

  return (
    <div className={classes.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {isInvalid(props) ? <span>{props.errorMessage || 'Введите верное значение'}</span> : null}
    </div>
  );
};

export default Input;

import React from "react";
import cls from "./Backdrop.css";

const Backdrop = props => {
  return <div className={cls.Backdrop} onClick={props.onClick} />;
};

export default Backdrop;

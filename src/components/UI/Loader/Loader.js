import React from "react";
import cls from "./Loader.css";
const Loader = props => {
  return (
    <div className={cls.center}>
      <div className={cls.Loader}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;

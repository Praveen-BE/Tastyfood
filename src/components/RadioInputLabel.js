import React from "react";

const RadioInputLabel = ({ nameValue, labelValue, name }) => {
  return (
    <div className="m-4">
      <input
        id={nameValue}
        className="size-10 lg:size-7 font-bold text-[--primary-text-color] cursor-pointer checked:bg-[--primary-text-color] transition-colors"
        type="radio"
        name={name}
        value={nameValue}
      />
      <label
        className="ml-4 text-[3rem] lg:text-[2rem] font-display font-bold text-[--primary-text-color] text-center"
        htmlFor={nameValue}
      >
        {labelValue}
      </label>
    </div>
  );
};

export default RadioInputLabel;

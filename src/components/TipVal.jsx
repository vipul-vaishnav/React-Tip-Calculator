import React from 'react';

const TipVal = ({ obj, onChange, selected }) => {
  const { id, tip } = obj;

  return (
    <li>
      <input type="radio" name="tip" id={id} value={tip} onChange={onChange} selected={selected === tip} hidden />
      <label
        htmlFor={id}
        className={`block w-full h-full px-2 py-2 overflow-hidden text-2xl font-bold text-center text-white rounded-md cursor-pointer bg-very_dark_cyan hover:bg-light_grayish_cyan hover:text-very_dark_cyan`}
      >
        {tip}%
      </label>
    </li>
  );
};

export default TipVal;

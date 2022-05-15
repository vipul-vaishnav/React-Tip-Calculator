import React from 'react';

const TipVal = ({ obj, onChange }) => {
  const { id, tip } = obj;

  return (
    <li>
      <input type="radio" name="tip" id={id} value={tip} onChange={onChange} hidden />
      <label
        htmlFor={id}
        className="block font-bold text-center bg-very_dark_cyan w-full h-full cursor-pointer text-white py-2 px-2 text-2xl rounded-md overflow-hidden hover:bg-light_grayish_cyan hover:text-very_dark_cyan"
      >
        {tip}%
      </label>
    </li>
  );
};

export default TipVal;

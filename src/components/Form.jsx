import React, { useContext } from 'react';
import TipVal from './TipVal';
import Dollar from '../images/icon-dollar.svg';
import Person from '../images/icon-person.svg';
import GlobalContext from '../context/GlobalContext';

const tipData = [
  { id: 1, tip: 5 },
  { id: 2, tip: 10 },
  { id: 3, tip: 15 },
  { id: 4, tip: 25 },
  { id: 5, tip: 50 },
];

const Form = () => {
  const { selected, formData, onChange, onSubmit } = useContext(GlobalContext);

  const { bill, tip, people } = formData;

  return (
    <form onSubmit={onSubmit}>
      {/* Bill Value */}
      <div className="mb-6">
        <label htmlFor="bill" className="font-bold text-dark_grayish_cyan">
          Bill
        </label>
        <div className="relative mt-4">
          <img src={Dollar} alt="dollar" className="absolute top-4 left-4" />
          <input
            className="w-full px-2 py-2 text-2xl font-bold text-right border-0 rounded-md bg-light_greyish_cyan text-very_dark_cyan caret-strong_cyan focus:outline-strong_cyan focus:outline-2 placeholder-dark_grayish_cyan"
            type="number"
            name="bill"
            id="bill"
            value={bill}
            onChange={onChange}
            placeholder="0"
          />
        </div>
      </div>

      {/* Tip Value */}
      <div className="mb-6">
        <p htmlFor="bill" className="font-bold text-dark_grayish_cyan">
          Select Tip %
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-4 md:grid-cols-3">
          {tipData.map((i) => {
            return <TipVal key={i.id} obj={i} onChange={onChange} selected={selected} />;
          })}
          <li>
            <input
              className="w-full px-2 py-2 text-2xl font-bold text-right border-0 rounded-md bg-light_greyish_cyan outline-0 text-very_dark_cyan placeholder-dark_grayish_cyan caret-strong_cyan focus:outline-strong_cyan focus:outline-2 "
              type="number"
              name="tip"
              id="tip"
              value={tip}
              onChange={onChange}
              placeholder="Custom"
            />
          </li>
        </ul>
      </div>

      {/* Number of People */}
      <div className="mb-6">
        <label htmlFor="people" className="font-bold text-dark_grayish_cyan">
          Number of People
        </label>
        <div className="relative mt-4">
          <img src={Person} alt="dollar" className="absolute top-4 left-4" />
          <input
            className="w-full px-2 py-2 text-2xl font-bold text-right border-0 rounded-md bg-light_greyish_cyan outline-0 text-very_dark_cyan caret-strong_cyan focus:outline-strong_cyan focus:outline-2 placeholder-dark_grayish_cyan"
            type="number"
            name="people"
            id="people"
            value={people}
            onChange={onChange}
            placeholder="0"
          />
        </div>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="w-full py-2 text-xl font-bold text-center rounded-md shadow-md bg-dark_grayish_cyan text-light_greyish_cyan hover:text-very_dark_cyan hover:bg-light_grayish_cyan hover:scale-95"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

import React, { useState } from 'react';
import Dollar from '../images/icon-dollar.svg';
import Person from '../images/icon-person.svg';

const Form = () => {
  const [formData, setFormData] = useState({
    bill: 0,
    tip: 0,
    people: 0,
  });

  const { bill, tip, people } = formData;

  const onChange = (e) => {
    const newData = {
      [e.target.id]: e.target.value,
    };
    setFormData((prev) => {
      return {
        ...prev,
        ...newData,
      };
    });
  };

  return (
    <form>
      {/* Bill Value */}
      <div>
        <label htmlFor="bill" className="text-dark_grayish_cyan font-bold">
          Bill
        </label>
        <div className="mt-4 relative">
          <img src={Dollar} alt="dollar" className="absolute top-4 left-4" />
          <input
            className="bg-light_greyish_cyan py-2 px-2 border-0 outline-0 rounded-md w-full text-right text-2xl text-very_dark_cyan font-bold"
            type="number"
            name="bill"
            id="bill"
            value={bill}
            onChange={onChange}
          />
        </div>
      </div>

      {/* Tip Value */}
      <div>
        <label htmlFor="bill" className="text-dark_grayish_cyan font-bold">
          Select Tip %
        </label>
      </div>

      {/* Number of People */}
      <div>
        <label htmlFor="people" className="text-dark_grayish_cyan font-bold">
          Number of People
        </label>
        <div className="mt-4 relative">
          <img src={Person} alt="dollar" className="absolute top-4 left-4" />
          <input
            className="bg-light_greyish_cyan py-2 px-2 border-0 outline-0 rounded-md w-full text-right text-2xl text-very_dark_cyan font-bold"
            type="number"
            name="people"
            id="people"
            value={people}
            onChange={onChange}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;

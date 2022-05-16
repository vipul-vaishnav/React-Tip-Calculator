import React, { useContext } from 'react';
import Card from './shared/Card';
import GlobalContext from '../context/GlobalContext';

const Result = () => {
  const { resultData, onReset } = useContext(GlobalContext);

  const { tip_val, total_val } = resultData;

  return (
    <Card color="very_dark_cyan" roundedBottom={true}>
      <div className="flex-col justify-between h-full sm:flex">
        <div>
          <div className="flex items-center justify-between mt-3 mb-5">
            <div>
              <h2 className="font-bold text-light_greyish_cyan">Tip Amount</h2>
              <p className="font-bold text-dark_grayish_cyan">/ person</p>
            </div>
            <div className="text-3xl font-bold text-right text-strong_cyan">
              $<span>{tip_val}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-bold text-light_greyish_cyan">Total</h2>
              <p className="font-bold text-dark_grayish_cyan">/ person</p>
            </div>
            <div className="text-3xl font-bold text-right text-strong_cyan">
              $<span>{total_val}</span>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={onReset}
            className="w-full py-2 text-xl font-bold text-center rounded-md shadow-md bg-strong_cyan text-very_dark_cyan hover:bg-light_grayish_cyan hover:scale-95"
          >
            RESET
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Result;

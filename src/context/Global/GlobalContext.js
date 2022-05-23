import { createContext, useReducer, useState } from 'react';
import GlobalReducer from './GlobalReducer';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    bill: '',
    tip: '',
    people: '',
    tip_val: '0.00',
    total_val: '0.00',
  };

  const { state, dispatch } = useReducer(GlobalReducer, initialState);

  // Radio Btns
  const [selected, setSelected] = useState(null);

  //   Form

  const onChange = (e) => {
    const newData = { [e.target.id]: e.target.value };
    if (
      Object.keys(newData)[0] === '1' ||
      Object.keys(newData)[0] === '2' ||
      Object.keys(newData)[0] === '3' ||
      Object.keys(newData)[0] === '4' ||
      Object.keys(newData)[0] === '5'
    ) {
      const updatedData = { tip: Object.entries(newData)[0][1] };
      setFormData((prev) => {
        return {
          ...prev,
          ...updatedData,
        };
      });
    }
    setFormData((prev) => {
      return {
        ...prev,
        ...newData,
      };
    });
  };

  const calcTip = () => {
    const tip_val = (Number(bill) * Number(tip)) / 100 / Number(people);
    return tip_val.toFixed(2);
  };

  const calcTotal = () => {
    const total_val = ((Number(bill) * Number(tip)) / 100 + Number(bill)) / Number(people);
    return total_val.toFixed(2);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (Number(people) <= 0 && Number(bill) <= 0) {
      // const newData = { ...alertData, show: true, type: 'warn', value: 'Field Values must be greater than zero' };
      // setAlertData((prev) => {
      //   return {
      //     ...prev,
      //     ...newData,
      //   };
      // });
      // setTimeout(() => {
      //   removeAlert();
      // }, 3000);
      return;
    } else if (Number(bill) <= 0) {
      // const newData = { ...alertData, show: true, type: 'warn', value: 'Bill value must be greater than zero' };
      // setAlertData((prev) => {
      //   return {
      //     ...prev,
      //     ...newData,
      //   };
      // });
      // setTimeout(() => {
      //   removeAlert();
      // }, 3000);
      return;
    } else if (Number(tip) < 0) {
      // const newData = { ...alertData, show: true, type: 'warn', value: 'Tip Value must not be negative' };
      // setAlertData((prev) => {
      //   return {
      //     ...prev,
      //     ...newData,
      //   };
      // });
      // setTimeout(() => {
      //   removeAlert();
      // }, 3000);
      return;
    } else if (Number(people) <= 0) {
      // const newData = { ...alertData, show: true, type: 'warn', value: 'Number of people must be greater than zero' };
      // setAlertData((prev) => {
      //   return {
      //     ...prev,
      //     ...newData,
      //   };
      // });
      // setTimeout(() => {
      //   removeAlert();
      // }, 3000);
      return;
    } else if (Number(people) > 0 && Number(bill) > 0 && Number(tip) >= 0) {
      // const newAlertData = { ...alertData, show: true, type: 'success', value: 'Tip Calculated Successfully' };
      const newResult = { tip_val: calcTip(), total_val: calcTotal() };
      // setAlertData((prev) => {
      //   return {
      //     ...prev,
      //     ...newAlertData,
      //   };
      // });
      setResultData((prev) => {
        return {
          ...prev,
          ...newResult,
        };
      });
      // setTimeout(() => {
      //   removeAlert();
      // }, 3000);
    }
  };

  const onReset = () => {
    setFormData({
      bill: '',
      tip: '',
      people: '',
    });

    setResultData({
      tip_val: '0.00',
      total_val: '0.00',
    });

    setSelected(null);
  };

  return <GlobalContext.Provider value={{ ...state, dispatch }}>{children}</GlobalContext.Provider>;
};

export default GlobalContext;

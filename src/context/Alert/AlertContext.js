import { createContext, useState } from 'react';

const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  // Alert
  const [alertData, setAlertData] = useState({
    show: false,
    type: 'success',
    value: 'Tip Calculated Successfully',
  });

  const removeAlert = () => {
    const newData = { ...alertData, show: false };
    setAlertData((prev) => {
      return {
        ...prev,
        ...newData,
      };
    });
  };

  return <AlertContext.Provider value={(alertData, removeAlert)}>{children}</AlertContext.Provider>;
};

export default AlertContext;

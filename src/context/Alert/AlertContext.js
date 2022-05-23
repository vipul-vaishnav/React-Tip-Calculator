import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const initialState = {
    show: false,
    type: 'success',
    value: 'Tip Calculated Successfully',
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const showAlert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  return <AlertContext.Provider value={{ alert: state, showAlert }}>{children}</AlertContext.Provider>;
};

export default AlertContext;

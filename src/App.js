import React, { useContext } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import Card from './components/shared/Card';
import Alert from './components/shared/Alert';
import AlertContext from './context/Alert/AlertContext';

const App = () => {
  const { alertData, removeAlert } = useContext(AlertContext);

  const { show, type, value } = alertData;

  return (
    <div className="relative min-h-screen bg-light_grayish_cyan font-default">
      <Header />
      {show && <Alert type={type} value={value} removeAlert={removeAlert} />}
      <div className="max-w-5xl mx-auto bg-transparent sm:px-4 sm:mt-2">
        <Card roundedBottom={false}>
          <div className="sm:grid sm:grid-cols-2 sm:gap-8">
            <Form />
            <Result />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;

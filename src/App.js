import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';
import Card from './components/shared/Card';

const App = () => {
  return (
    <div className="min-h-screen bg-light_grayish_cyan font-default ">
      <Header />
      <div className="max-w-5xl mx-auto sm:px-4 sm:mt-4">
        <Card color="white" roundedBottom={false}>
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

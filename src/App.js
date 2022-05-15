import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/shared/Card';

const App = () => {
  return (
    <div className="bg-light_grayish_cyan min-h-screen font-default ">
      <Header />
      <Card>
        <Form />
      </Card>
    </div>
  );
};

export default App;

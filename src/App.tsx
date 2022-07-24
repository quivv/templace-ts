import React, { useCallback } from 'react';
import './App.css';
import { Text } from './components/Text';

function App() {

  const clickHandler = useCallback((data: string) => {
    console.log(data);
  }, []);

  return (
    <div className="App">
      <Text
        title='This is title'
        body='this is body'
        childCoponent={<h1>Text H3</h1>} onChange={clickHandler}
        enum={'number'}
        data={'123'}
      />
    </div>
  );
}

export default App;

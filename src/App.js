import React from 'react';
import NavigationBar from './features/navigationBar/NavigationBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <h1> Country FactFile </h1>
      </header>
      <div className='image'>
      </div>
    </div>
  );
}

export default App;

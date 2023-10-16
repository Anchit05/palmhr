import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home';
import { BookProvider } from './context/BookContext';

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Home />
      </BookProvider>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './routes/MainRouter';
import { CartProvider } from './context/CartContext';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <CartProvider>
      <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <MainRouter />
      </div>
    </CartProvider>
  );
};

export default App;


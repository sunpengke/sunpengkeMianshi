import React from 'react';
import './App.css';
import useWinSize from './utils/useWinSize'
import Small from './components/small/small.jsx'
import Big from './components/big/big'
export default function App() {
  const size = useWinSize()
  return (
    <div className="App">
      {size.width >= 768 ? (
        <Big />
      ) : (<Small />)}
    </div>
  )
}


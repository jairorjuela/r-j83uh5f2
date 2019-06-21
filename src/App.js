import React, { useState } from 'react';
import './App.css'

export const App = () => {

  const [char, setChar] = useState(0)

  return (
    <div className="container">
      <textarea onChange={e => setChar(e.target.value.length)} rows="3"></textarea>
      <div className="counter">{char}</div>
    </div>
  );

};

export default App;

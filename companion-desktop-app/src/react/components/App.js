import React from 'react';
import Button from './Button';

function App() {
  return (
    <div>
      <div
        style={{
          height: '33%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '0 1rem',
        }}
      >
        <Button id="btn1" label="Button 1" />
        <Button id="btn2" label="Button 2" />
        {/* Add more buttons as needed */}
      </div>
    </div>
  );
}

export default App;

import React from 'react';

function Button({ id, label }) {
  return <button onClick={() => console.log(`${label} clicked`)}>{label}</button>;
}

export default Button;

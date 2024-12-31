import React from 'react';
function Child({ sendDataToParent }) {
  const sendValue = () => {
    const value = 'Hello from Child!';
    sendDataToParent(value);
  };
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendValue}>Send Data to Parent</button>
    </div>
  );
}
export default Child;

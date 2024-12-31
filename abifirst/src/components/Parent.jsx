import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [childData, setChildData] = useState('');

  // Callback function to receive data from child
  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {childData}</p>
      {/* Pass the callback function to the child */}
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default Parent;

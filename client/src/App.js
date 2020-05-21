import React, { useState } from 'react';
import axios from 'axios';

const getMsg = async url => {
  const response = await axios.get(url);
  return response.data;
}

const App = () => {
  const [message, setMessage] = useState("");

  const onGet = async () => {
    const msg = await getMsg('/message');
    setMessage(msg);
  };

  const onClear = () => {
    setMessage("");
  }

  return (
    <div>
      <p>Message from the server:</p>
      <button onClick={onGet}>Get</button>
      <code>{message}</code>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default App;

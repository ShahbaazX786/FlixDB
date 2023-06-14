import React from 'react';

const URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}`;

function App() {

  return (
    <div>
      <h1>Bismillah</h1>
      <p>This line tests dotenv file {URL}</p>
    </div>
  )
}

export default App;

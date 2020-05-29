import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    const arr = ['eat', 'sleep', 'code']

    const data = arr.map((item) => {
    return <h1>{item}</h1>
    })
  return (
    <div className="App">
        {data}
    </div>
  );
}
}

export default App;

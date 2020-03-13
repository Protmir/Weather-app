import React from 'react';
import './App.css';
import Weather from './components/Weather';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        < Weather />
      </div>
    );
  }
}

export default App;

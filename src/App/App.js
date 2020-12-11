import React from "react";
import NavBar from '../navBar/navBar.js'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="navBar">
        {/* Components go here */}
        <NavBar />
      </header>
    </div>
    );
  }
}

export default App;

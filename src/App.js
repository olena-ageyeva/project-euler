import React from "react";

import "./App.css";
import Solutions from "./components/Solutions";

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <img
          src="https://www.projecteuler.net/themes/20190820/logo_default.png"
          alt="logo"          
        />
        Problems and Solutions
      </header>
      <Solutions />
    </div>
  );
}

export default App;

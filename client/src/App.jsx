import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("http://api.sakxa.com/fruits")
      .then((response) => response.json())
      .then((data) => setFruits(data.fruits));
  }, []);

  return (
    <div className="App">
      {fruits && console.log(fruits)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {fruits && fruits.map((fruit) => `${fruit}`)}
      </header>
    </div>
  );
}

export default App;

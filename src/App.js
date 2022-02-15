import React from "react";
import "./styles.css";

const CounterContext = React.createContext(null);

function App() {
  return (
    <CounterContext.Provider value={React.useState(0)}>
      <div className="App">
        <Counter />
        <CounterButton />
      </div>
    </CounterContext.Provider>
  );
}

function CounterButton() {
  const [, setCounter] = React.useContext(CounterContext);

  return (
    <button onClick={() => setCounter((value) => value + 1)}>
      Increment counter
    </button>
  );
}

function Counter() {
  const [counter] = React.useContext(CounterContext);

  return <h1>Counter: {counter}</h1>;
}

export default App;

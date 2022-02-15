import React from "react";
import "./styles.css";

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="App">
      <Counter counter={counter} />
      <CounterButton setCounter={setCounter} />
    </div>
  );
}

function CounterButton(props) {
  return (
    <button onClick={() => props.setCounter((value) => value + 1)}>
      Increment counter
    </button>
  );
}

function Counter(props) {
  return <h1>Counter: {props.counter}</h1>;
}

export default App;

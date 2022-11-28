import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [todoName, setTodoName] = useState("");
  const [status, setStatus] = useState(false);

  const handleIncrementClick = () => {
    setCounter(counter + 1);
  };

  const handleDecrementClick = () => {
    setCounter(counter - 1);
  };

  const handleChange = (event) => {
    setTodoName(event.target.value);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <p>{todoName}</p>
      <p>{status ? "Done" : "In progress"}</p>
      <input
        value={todoName}
        onChange={handleChange}
        type="text"
        placeholder="Enter todo name..."
      />
      <input
        type="checkbox"
        checked={status}
        onChange={() => setStatus(!status)}
      />
      <button onClick={handleIncrementClick}>+1</button>
      <button onClick={handleDecrementClick}>-1</button>
    </div>
  );
}

export default App;

// class App1 extends React.Component {
//   state = {
//     todoName: "",
//     todo: [],
//   };

//   handleChange = (event) => {
//     this.setState({});
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.handleChange} />
//       </div>
//     );
//   }
// }

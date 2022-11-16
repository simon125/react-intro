import "./App.css";
import ComponentWithState from "./components/ComponentWithState";
import ComponentWithUpdatingState from "./components/ComponentWithUpdatingState";
import ComponentWithUpdatingState1 from "./components/ComponentWithUpdatingState1";
import ComponentWithUpdatingStateComplex from "./components/ComponentWithUpdatingStateComplex";
import { FunctionalComponentExercise } from "./components/FunctionalComponentExercise";

function App() {
  return (
    <div className="App">
      <ComponentWithState />
      <ComponentWithUpdatingState />
      <ComponentWithUpdatingState1 />
      <ComponentWithUpdatingStateComplex />
      <FunctionalComponentExercise user={{ name: "Jogn", age: 12 }} />
    </div>
  );
}

export default App;

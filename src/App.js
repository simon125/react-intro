import "./App.css";
import { ParentComponent } from "./components/ComponentConditionalDisplaying";
import SimpleComponent from "./components/SimpleComponent";

function App() {
  return (
    <div className="App">
      <SimpleComponent />
      <ParentComponent />
    </div>
  );
}

export default App;

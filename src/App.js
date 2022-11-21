import "./App.css";
import { ParentComponent } from "./components/ComponentConditionalDisplaying";
import SimpleComponent, { TestComponent } from "./components/SimpleComponent";

import ComponentWithState from "./components/ComponentWithState";
import { ComponentWithState1 } from "./components/ComponentWithState1";

function App() {
  return (
    <div className="App">
      {/* <SimpleComponent /> */}
      {/* <TestComponent /> */}
      {/* <ParentComponent /> */}
      <ComponentWithState />
      <ComponentWithState1 />
    </div>
  );
}

export default App;

import { render } from "react-dom";
import Example from "./Stickies/example";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./index.css";

function App() {
  return (
    <div>
      <div className="Stickies">
        <DndProvider backend={HTML5Backend}>
          <Example />
        </DndProvider>
      </div>
      <div className="App">
        hi there
        <button onClick={(e) => alert("x")}>click</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

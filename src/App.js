import Clock from "./Clock";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <Clock />
    </div>
  );
}

/*

A widget that renders the current time in HH:MM:SS format 
using a 7-segment digital display

Each digit needs to be rendered by individual segments, 
but you can exercise your creativity by choosing different colors and styling it differently.

*/

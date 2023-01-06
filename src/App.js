import "./App.scss";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import { DataProvider, WeatherContext } from "./GlobalState";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Left />
        <Right />
      </DataProvider>
    </div>
  );
}

export default App;

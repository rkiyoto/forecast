import { Toaster } from "react-hot-toast";

import AppRouter from "./router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Toaster />
      <AppRouter />
    </div>
  );
}

export default App;
